var newsource;

function reverbpreview1(){
    clearInterval(intervalid);
    clearInterval(intervalid12);
    clearInterval(videointerval)
    var start = parseFloat(document.getElementById("start").value);
    var end = parseFloat(document.getElementById("end").value);
    var wet= parseFloat(document.getElementById("wet").value);
  var gain2 = parseFloat(document.getElementById("gain2").value);

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

else if (isNaN(wet)){


}
else{
   




    const offlineCtx = new AudioContext();
   
var array1 = new Float32Array(end*bufferarray.sampleRate -start*bufferarray.sampleRate)

bufferarray.copyFromChannel(array1, 0, start*bufferarray.sampleRate)

var sourcebuffer = offlineCtx.createBuffer(bufferarray.numberOfChannels, array1.length, bufferarray.sampleRate);

var channeldata = sourcebuffer.getChannelData(0)

channeldata.set(array1)


const bufferSize = offlineCtx.sampleRate * wet; // Adjust the buffer size as needed
const impulseBuffer = offlineCtx.createBuffer(1, bufferSize, audiocontext.sampleRate);
const impulseData = impulseBuffer.getChannelData(0);

for (let i = 0; i < bufferSize; i++) {
    // Apply decay by gradually reducing amplitude over time
    const decayFactor = 1 - (i / bufferSize);
    impulseData[i] = (Math.random() * 2 - 1) * decayFactor; // Apply decay to the impulse
  }


  const convolver = offlineCtx.createConvolver();
convolver.buffer = impulseBuffer;
convolver.normalize = true;



source1 = offlineCtx.createBufferSource();
source1.buffer = sourcebuffer;
var gain = offlineCtx.createGain()

if(isNaN(gain2)){

}
else{
gain.gain.value = gain2
}

source1.connect(convolver);
convolver.connect(gain);
gain.connect(offlineCtx.destination);
source1.start(0)
source1.stop(array1.length/bufferarray.sampleRate)

         
}}