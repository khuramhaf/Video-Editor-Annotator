var newsource;

function overdrivepreview1(){

    clearInterval(intervalid);
    clearInterval(intervalid12);
    clearInterval(videointerval)
    var start = parseFloat(document.getElementById("start").value);
    var end = parseFloat(document.getElementById("end").value);
    var outputgain = parseFloat(document.getElementById("outputgain").value)
    var drive = parseFloat(document.getElementById("drive").value)
   var curveamount = parseFloat(document.getElementById("curveamount").value); 
   var algorithmindex = parseFloat(document.getElementById("algorithmindex").value); 

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



else if ( isNaN(outputgain) || isNaN(drive) || isNaN(curveamount) || isNaN(algorithmindex)){

    
    }

else{
    var newbuffer = audiocontext.createBuffer(bufferarray.numberOfChannels, bufferarray.length, bufferarray.sampleRate)
var ab3 = newbuffer.getChannelData(0)

ab3.set(bufferarray.getChannelData(0), 0)






    const offlineCtx = new AudioContext();
    var tuna = new Tuna(offlineCtx);
var array1 = new Float32Array(end*bufferarray.sampleRate -start*bufferarray.sampleRate)
var array5;


bufferarray.copyFromChannel(array1, 0, start*bufferarray.sampleRate)

var sourcebuffer = offlineCtx.createBuffer(bufferarray.numberOfChannels, array1.length, bufferarray.sampleRate);

var channeldata = sourcebuffer.getChannelData(0)

channeldata.set(array1)

source1 = offlineCtx.createBufferSource();
source1.buffer = sourcebuffer;




var pingPongDelay =  new tuna.Overdrive({
    outputGain: outputgain,           //-42 to 0 in dB
    drive: drive,                 //0 to 1
    curveAmount: curveamount,           //0 to 1
    algorithmIndex: algorithmindex,            //0 to 5, selects one of the drive algorithms
    bypass: false
});
source1.connect(pingPongDelay)
pingPongDelay.connect(offlineCtx.destination)
source1.start(0)
source1.stop(array1.length/bufferarray.sampleRate)
         
}}