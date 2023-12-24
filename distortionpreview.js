

function distortionpreview1(){
    clearInterval(intervalid);

    clearInterval(intervalid12);
    clearInterval(videointerval)
    document.getElementById("chrousux").style.display = "none"
    var start = parseFloat(document.getElementById("start").value);
    var end = parseFloat(document.getElementById("end").value);
    var gain1 = parseFloat(document.getElementById("gain1").value)
    var amount = parseFloat(document.getElementById("amount").value)
   var gainselect = document.getElementById("gainselect").value; 
  

time = parseInt(start);




  



var final = end - start;

if (sourcecheck === null){

    
    if(source){
        source.stop();
    }

    if (source1){
        source1.stop();
    }

}

if (check === null ){

document.getElementById("error").innerHTML = "Please select a file"

}

else if (bufferarray===null){

document.getElementById("error").innerHTML = "No data available"

}

else if (isNaN(start)){
document.getElementById("error").innerHTML = "Starting point is not a number"


}
else if (start >= source.buffer.duration){
document.getElementById("error").innerHTML = "starting point is greater than or equal to source buffer duration"

} 

else if (start < 0 )
{

document.getElementById("error").innerHTML = "Starting Point must be greater than 0"

}
else if (start >= end) {
document.getElementById("error").innerHTML = "Starting Point must be less than Ending Point"

}

else if (isNaN(end)){
document.getElementById("error").innerHTML = "Ending Point is not a number"
} 
else if ( end > source.buffer.duration ){

document.getElementById("error").innerHTML = "Ending point is greater than  duration"

end < 0 }

else if ( end <= start){

document.getElementById("error").innerHTML = "Ending Point is greater than equal to Starting Point"

}

else if (isNaN(gain1) || isNaN(amount)){
    
}

else{
    




    const offlineCtx = new AudioContext();
   
var array1 = new Float32Array(end*bufferarray.sampleRate -start*bufferarray.sampleRate)
var array5;

bufferarray.copyFromChannel(array1, 0, start*bufferarray.sampleRate)

var sourcebuffer = offlineCtx.createBuffer(bufferarray.numberOfChannels, array1.length, bufferarray.sampleRate);

var channeldata = sourcebuffer.getChannelData(0)

channeldata.set(array1)


source1 = offlineCtx.createBufferSource();
 source1.buffer = sourcebuffer;

 const gainNode = offlineCtx.createGain();
 gainNode.gain.value = gain1; // Adjust the gain as needed
 
 // Create a WaveShaperNode for distortion
 const distortionNode = offlineCtx.createWaveShaper();


 distortionNode.curve = makeDistortionCurve(amount); // Adjust the distortion amount

// Connect the nodes
distortionNode.connect(gainNode);
gainNode.connect(offlineCtx.destination);
   source1.connect(distortionNode);

 source1.start(0);
         
}}



function makeDistortionCurve(amount) {
    const k = amount;
    const n_samples = audiocontext.sampleRate;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
  
    for (let i = 0; i < n_samples; i++) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
  
    return curve;
  }