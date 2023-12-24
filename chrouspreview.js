

function chrouspreview1(){
    clearInterval(intervalid);
    clearInterval(intervalid12);
    clearInterval(videointerval)
    var start = parseFloat(document.getElementById("start").value);
    var end = parseFloat(document.getElementById("end").value);
    var depth = parseFloat(document.getElementById("depth").value)
    var rate = parseFloat(document.getElementById("rate").value)
   var gainselect = document.getElementById("gainselect").value; 
  

time = parseInt(start);




  



var final = end - start;

if (sourcecheck === null){

    
    if(source){
        source.stop();
    }

    if(source1){

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


else if (isNaN(depth)||isNaN(rate)){

    
}

else{




    const offlineCtx = new AudioContext();
   
var array1 = new Float32Array(end*bufferarray.sampleRate -start*bufferarray.sampleRate)

bufferarray.copyFromChannel(array1, 0, start*bufferarray.sampleRate)

var sourcebuffer = offlineCtx.createBuffer(bufferarray.numberOfChannels, array1.length, bufferarray.sampleRate);

var channeldata = sourcebuffer.getChannelData(0)

channeldata.set(array1)
source1 = offlineCtx.createBufferSource();
 source1.buffer = sourcebuffer;
  const delayNode = offlineCtx.createDelay();

  // Create a low-frequency oscillator (LFO) to modulate the delay time
  const lfo = offlineCtx.createOscillator();
 
  if(chrousselect === "triangle"){
    lfo.type = 'triangle'; 
  }

 else if(chrousselect === "square"){
    lfo.type = 'square'; 
  }


  else if(chrousselect === "sawtooth"){
    lfo.type = 'sawtooth'; 
  }

 else {
    lfo.type = 'sine'; 
  }




  lfo.frequency.value = rate; // Modulation rate in Hz

  // Create a gain node to control the depth of the modulation
  const depthNode = offlineCtx.createGain();
  depthNode.gain.value = depth; // Modulation depth

  // Connect the nodes to create the chorus effect
  source1.connect(delayNode);
  source1.connect(offlineCtx.destination);
  delayNode.connect(offlineCtx.destination);

  lfo.connect(depthNode);
  depthNode.connect(delayNode.delayTime);
  lfo.start();

  // Schedule the playback
  source1.start(0);
       
}}