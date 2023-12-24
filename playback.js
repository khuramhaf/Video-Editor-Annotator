var newsource;

function playback1(){
    clearInterval(intervalid);
    document.getElementById("playbackux").style.display = "none"
    clearInterval(intervalid12);
    clearInterval(videointerval)
    document.getElementById("echoux").style.display = "none"
    var start = parseFloat(document.getElementById("start").value);
    var end = parseFloat(document.getElementById("end").value);
    var delay= parseFloat(document.getElementById("playbackrate").value);
    
  

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

else if (isNaN(delay)){
    
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
var lengthcheck;

lengthcheck = start + (end-start)/delay
   var offlineCtx;


   if(delay>1){

    offlineCtx = new OfflineAudioContext(bufferarray.numberOfChannels, bufferarray.length - (((end-start)*bufferarray.sampleRate)-((end-start)/delay)*bufferarray.sampleRate), audiocontext.sampleRate);
   }

   if(delay<1){

    offlineCtx = new OfflineAudioContext(bufferarray.numberOfChannels, bufferarray.length + ((end-start)/(delay))*bufferarray.sampleRate, audiocontext.sampleRate);
   }

   else{


   }
   

source1 = offlineCtx.createBufferSource();
source1.buffer = bufferarray;
source1.playbackRate.setValueAtTime(delay, start)
source1.playbackRate.setValueAtTime(1, lengthcheck)

source1.connect(offlineCtx.destination);
source1.start(0)

         offlineCtx
        .startRendering()
        .then((renderedBuffer) => {

         source =    audiocontext.createBufferSource()
         source.buffer = renderedBuffer;
         source.connect(audiocontext.destination);
         source.start(0,0,0)

         drawtime();

          var array4 = renderedBuffer.getChannelData(0)

bufferarray=renderedBuffer;
         
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


function drawtime(){

    var duration = source.buffer.duration
        var canvas13 = document.getElementById("canvas13");
        var ctx1 = canvas13.getContext("2d");
    var scale = duration/20
        var length = (1290/duration)*scale
    
        ctx1.clearRect(0,0, canvas13.width, canvas13.height)
    
        ctx1.fillStyle = "black"
        ctx1.globalAlpha = 1;
    var x = 0;
        for (i = 1; i<parseInt(source.buffer.duration)/scale; i++){
    x = x+length
        ctx1.fillText(parseInt(i*scale), x, 12)
        ctx1.fillText("|", x+38, 12)
    }
     }