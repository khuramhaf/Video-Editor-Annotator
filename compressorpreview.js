var newsource;

function compressorpreview1(){
    clearInterval(intervalid);
    clearInterval(intervalid12);
    clearInterval(videointerval)
    var start = parseFloat(document.getElementById("start").value);
    var end = parseFloat(document.getElementById("end").value);
    var threshold= parseFloat(document.getElementById("threshold").value);
    var knee = parseFloat(document.getElementById("knee").value);
    var ratio = parseFloat(document.getElementById("ratio").value)
    var attack = parseFloat(document.getElementById("attack").value)
   var release = document.getElementById("release").value; 
  

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
   

    
}

undo.push(newbuffer);




    const offlineCtx = new AudioContext();
   
var array1 = new Float32Array(end*bufferarray.sampleRate -start*bufferarray.sampleRate)
var array5;

bufferarray.copyFromChannel(array1, 0, start*bufferarray.sampleRate)

var sourcebuffer = offlineCtx.createBuffer(bufferarray.numberOfChannels, array1.length, bufferarray.sampleRate);

var channeldata = sourcebuffer.getChannelData(0)

channeldata.set(array1)



source1 = offlineCtx.createBufferSource();
const compressorNode = offlineCtx.createDynamicsCompressor();

if(isNaN(threshold)){

}
else{
    compressorNode.threshold.value = threshold;
}

if(isNaN(knee)){

}

else{
    compressorNode.knee.value = knee;
}

if(isNaN(ratio)){

}

else{
    compressorNode.ratio.value = ratio;
}

if(isNaN(attack)){

}

else{
    compressorNode.attack.value = attack;
}

if(isNaN(release)){

}

else{
    compressorNode.release.value = release;
}



source1.buffer = sourcebuffer;
source1.connect(compressorNode)
compressorNode.connect(offlineCtx.destination)
source1.start(0)
source1.stop(array1.length/bufferarray.sampleRate)
        
         
}}