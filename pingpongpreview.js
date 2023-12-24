var newsource;

function pingpongpreview1(){

    rectx = "null"
    rectwidth = "null"
    clearInterval(intervalid);
    clearInterval(intervalid12);
    clearInterval(videointerval)
    var start = parseFloat(document.getElementById("start").value);
    var end = parseFloat(document.getElementById("end").value);
    var pingwet = parseFloat(document.getElementById("pingwet").value)
    var pingfeedback = parseFloat(document.getElementById("pingfeedback").value)
   var dtl = document.getElementById("dtl").value; 
   var dtr = document.getElementById("dtr").value; 
  

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



else if ( isNaN(pingwet) || isNaN(pingfeedback) || isNaN(dtl) || isNaN(dtr)){

    
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





var pingPongDelay = new tuna.PingPongDelay({
    wetLevel: pingwet,       //0 to 1
    feedback: pingfeedback,       //0 to 1
    delayTimeLeft: dtl,  //1 to 10000 (milliseconds)
    delayTimeRight: dtr  //1 to 10000 (milliseconds)
});
source1.connect(pingPongDelay)
pingPongDelay.connect(offlineCtx.destination)
source1.start(0)
source1.stop(array1.length/bufferarray.sampleRate)
        
         
}}