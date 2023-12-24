function trim(){

    rectx = "null"
    rectwidth = "null"
    clearInterval(intervalid);
    clearInterval(intervalid12);
    clearInterval(videointerval)
        var start = parseFloat(document.getElementById("start").value);
    var end = parseFloat(document.getElementById("end").value);
    var final = end - start
    time=0;
        if(source){
            source.stop();
        }
        
        if(source1){
            source1.stop();
        }
     
        document.getElementById("timer").innerHTML = time;
      
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

    animationarray = []
    filterarray = []
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
var array50 = [...videodata]
undo.push(newbuffer);
undo1.push(array50)

var array1 = bufferarray.getChannelData(0);
var array2;
var array7
var array8;

if (bufferarray.numberOfChannels>1){

array2 = bufferarray.getChannelData(1)
var array5 = array2.subarray(0, start*bufferarray.sampleRate)
var array6 = array2.subarray(end*bufferarray.sampleRate, bufferarray.length)
array8 = new Float32Array(array5.length+array6.length)
array8.set(array5, 0)
array8.set(array6, array5.length)
}

videodata.splice(parseInt(start*videoinfo.samplerate), parseInt(final*videoinfo.samplerate))

var array3 = array1.subarray(0, start*bufferarray.sampleRate)
var array4 = array1.subarray(end*bufferarray.sampleRate, bufferarray.length)
array7 =new Float32Array(array3.length+array4.length)
array7.set(array3, 0)
array7.set(array4, array3.length)

var audiobuffer =   audiocontext.createBuffer(bufferarray.numberOfChannels, array7.length, audiocontext.sampleRate);

var ab1 = audiobuffer.getChannelData(0);
ab1.set(array7)

if (bufferarray.numberOfChannels>1){

    var ab2 = audiobuffer.getChannelData(1)
    ab2.set(array8);
}

bufferarray = audiobuffer;

source = audiocontext.createBufferSource()
source.buffer=audiobuffer;
source.connect(audiocontext.destination);
source.start(0, 0, 0);

drawtime();

sourceduration = source.buffer.duration;
document.getElementById("duration").innerHTML = source.buffer.duration.toFixed(3);


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
for (let i = 0; i < array7.length; i=i+500) {
const x = i / array7.length * canvascontext.width;
const y = ((array7[i] + 1) / 2 * (canvascontext.height - topOffset - bottomOffset)) + topOffset;
canctx.lineTo(x, y);
}
canctx.stroke();
      
     
   if (source.buffer.duration>=1){

   
   
}
   
}
}


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
        ctx1.fillText(parseInt(i*scale), x, 10)
        ctx1.fillText("|", x+38, 12)
    }
     }