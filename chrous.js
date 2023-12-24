

function chrous1(){

    rectx = "null"
    rectwidth = "null"
    clearInterval(intervalid);
    clearInterval(intervalid12);
    clearInterval(videointerval)
 

    document.getElementById("chrousux").style.display = "none"
    var start = parseFloat(document.getElementById("start").value);
    var end = parseFloat(document.getElementById("end").value);
    var depth = parseFloat(document.getElementById("depth").value)
    var rate = parseFloat(document.getElementById("rate").value)
   var chrousselect = document.getElementById("chrousselect").value; 
  

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
    var newbuffer = audiocontext.createBuffer(bufferarray.numberOfChannels, bufferarray.length, bufferarray.sampleRate)
var ab3 = newbuffer.getChannelData(0)

ab3.set(bufferarray.getChannelData(0), 0)

if (bufferarray.numberOfChannels>1){
    var ab4 = newbuffer.getChannelData(1)
    ab4.set(bufferarray.getChannelData(1), 0)

}

if (undo.length ===3){
                
    undo.splice(0, 1)
    undo1.splice(0, 1)
   

    
}

undo.push(newbuffer);
var array50 = [...videodata]
undo1.push(array50);




    const offlineCtx = new OfflineAudioContext(bufferarray.numberOfChannels, final*(bufferarray.sampleRate), audiocontext.sampleRate);
   
var array1 = new Float32Array(end*bufferarray.sampleRate -start*bufferarray.sampleRate)
var array5;

if(bufferarray.numberOfChannels >1){
    var array5 = new Float32Array(end*bufferarray.sampleRate -start*bufferarray.sampleRate)

   bufferarray.copyFromChannel(array5, 1, bufferarray.sampleRate)

}
bufferarray.copyFromChannel(array1, 0, start*bufferarray.sampleRate)

var sourcebuffer = offlineCtx.createBuffer(bufferarray.numberOfChannels, array1.length, bufferarray.sampleRate);

var channeldata = sourcebuffer.getChannelData(0)

channeldata.set(array1)

if(bufferarray.numberOfChannels>1){

    var channeldata1 = sourcebuffer.getChannelData(1)
    channeldata1.set(array5)
}

source1 = offlineCtx.createBufferSource();
 source1.buffer = sourcebuffer;
  const delayNode = offlineCtx.createDelay();

  // Create a low-frequency oscillator (LFO) to modulate the delay time
  const lfo = offlineCtx.createOscillator();

if(chrousselect === "sine"){
    lfo.type = 'sine'; 
  }

 else if(chrousselect === "square"){
    lfo.type = 'square'; 
  }


  else if(chrousselect === "sawtooth"){
    lfo.type = 'sawtooth'; 
  }

 else {
    lfo.type = 'triangle'; 
  }
  // You can use other waveforms like 'triangle' or 'sawtooth'
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
         offlineCtx
        .startRendering()
        .then((renderedBuffer) => {

            

          var array3 = renderedBuffer.getChannelData(0)


            bufferarray.copyToChannel(array3, 0, start*bufferarray.sampleRate)

            if(bufferarray.numberOfChannels>1){
                bufferarray.copyToChannel(array5, 1, start*bufferarray.sampleRate)
            }

            var array4 = bufferarray.getChannelData(0)

         
array = renderedBuffer.getChannelData(0)
var canvascontext = document.getElementById('canvas11');

var canctx = canvascontext.getContext('2d');
canctx.clearRect(0,0,canvascontext.width, canvascontext.height)

canctx.fillStyle = "black"
canctx.globalAlpha = 1;
canctx.beginPath();
canctx.moveTo(0, canvascontext.height / 2);
canctx.lineWidth = 1;
const topOffset = 10;
const bottomOffset = 10;
for (let i = 0; i < array4.length; i=i+500) {
const x = i / array4.length * canvascontext.width;
const y = ((array4[i] + 1) / 2 * (canvascontext.height - topOffset - bottomOffset)) + topOffset;
canctx.lineTo(x, y);
}
canctx.stroke();


          })
         
}}