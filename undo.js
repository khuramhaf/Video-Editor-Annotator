function undodata(){

    if(undo1.length<=0){}

    else{
    document.getElementById("error").innerHTML = "";
if (undo.length >0){

    if (source){
source.stop()
}

clearInterval(intervalid);
clearInterval(videointerval)
time = 0;

bufferarray = undo[undo.length-1];
undo.pop();
videodata = undo1[undo1.length-1];
undo1.pop();


document.getElementById("totallength").innerHTML=bufferarray.length;
source = audiocontext.createBufferSource();
source.buffer=bufferarray;
source.connect(audiocontext.destination);
source.start(0, 0, 0);

drawtime();
sourceduration = source.buffer.duration;
document.getElementById("duration").innerHTML = source.buffer.duration;
if ( source.buffer.duration >=1){

}

}

var canvascontext = document.getElementById('canvas11');
var newarray = bufferarray.getChannelData(0)
var canctx = canvascontext.getContext('2d');
canctx.clearRect(0,0,canvascontext.width, canvascontext.height)
canctx.fillStyle = "black"
canctx.globalAlpha = 1;
canctx.beginPath();
canctx.moveTo(0, canvascontext.height / 2);
canctx.lineWidth = 1;
const topOffset = 10;
const bottomOffset = 10;
for (let i = 0; i < newarray.length; i=i+500) {
const x = i / newarray.length * canvascontext.width;
const y = ((newarray[i] + 1) / 2 * (canvascontext.height - topOffset - bottomOffset)) + topOffset;
canctx.lineTo(x, y);
}
canctx.stroke();








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