var mousedownx
var mouseupx


var canvas = null

var ctx = null


var isresize = false;

var rectstatus = null;

var previousx = 0;
var isdrawing = false;

var endx;

function mouseDown(event) {

    if(bufferarray.length>0){





   canvas = document.getElementById("canvas11");
    ctx = canvas.getContext("2d");

    ctx.fillStyle = "black"; // Set the fill color
    ctx.globalAlpha = 1;   // Set the global alpha (transparency)
drawline()


    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    mousedownx=event.clientX;

    previousx = rectx;

    if (mouseX >= rectx - 10 && mouseX <= rectx + 10) {
        // Adjust the mouse coordinates to be relative to the rectangle
        isresize = true;
rectstatus = "left"
    
    }

   else if (mouseX >=rectx + rectwidth-10 && mouseX <=rectx + rectwidth+10 ) {
        // Adjust the mouse coordinates to be relative to the rectangle
        isresize = true
rectstatus = "right"
    }

    else {
        ctx.clearRect(0,0, canvas.width, canvas.height)
        rectx = mouseX;
        isdrawing = true;
    }

    document.getElementById("start").value = " "
    var selectionEnd = Math.floor((rectx / canvas.width) * bufferarray.length);
  document.getElementById("start").value = selectionEnd/audiocontext.sampleRate
}

else{

}
}
function mouseMove(event) {

    if(bufferarray.length>0){


   

    canvas = document.getElementById("canvas11");
    ctx = canvas.getContext("2d");
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;
  
    if(isresize===true){
        if (rectstatus === "left") {
         
        rectwidth -= (mouseX - previousx);
        rectx = mouseX;
        ctx.clearRect(0,0, canvas.width, 150)
        ctx.fillStyle = "black"; // Set the fill color
    ctx.globalAlpha = 1;   // Set the global alpha (transparency)
drawline()
   
     
            previousx = mouseX;


            document.getElementById("start").value = " "
            var selectionEnd = Math.floor((mouseX / canvas.width) * bufferarray.length);
          document.getElementById("start").value = selectionEnd/audiocontext.sampleRate

      
    }


   else if (rectstatus === "right") {
        // Adjust the mouse coordinates to be relative to the rectangle
        rectwidth = mouseX - rectx;
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.fillStyle = "black"; // Set the fill color
        ctx.globalAlpha = 1;   // Set the global alpha (transparency)
    drawline()

        document.getElementById("end").value = " "
        var selectionEnd = Math.floor((mouseX / canvas.width) * bufferarray.length);
      document.getElementById("end").value = selectionEnd/audiocontext.sampleRate
    }

    else{

    }

    }

    // Check if the mouse coordinates are within the rectangle bounds
    if (mouseX >= rectx-10 && mouseX <= rectx + 10) {
        // Adjust the mouse coordinates to be relative to the rectangle
        

        canvas.style.cursor = 'ew-resize';
    }

   else if (mouseX >=rectx + rectwidth-10 && mouseX <=rectx + rectwidth+10) {
        // Adjust the mouse coordinates to be relative to the rectangle
       

        canvas.style.cursor = 'ew-resize';
    }

    else {
        canvas.style.cursor = 'auto';
    }

    if (isdrawing === true){
        document.getElementById("error").innerHTML = "";


        endx = mouseX;

     rectwidth= endx - rectx;
        ctx.clearRect(0,0, canvas.width, canvas.height)

        ctx.fillStyle = "black"; // Set the fill color
    ctx.globalAlpha = 1;   // Set the global alpha (transparency)
drawline()
    ctx.fillStyle = "red"; // Set the fill color
    ctx.globalAlpha = 0.2; 

ctx.fillRect(rectx, 0, rectwidth, 150);

document.getElementById("end").value = " "
    var selectionEnd = Math.floor((mouseX / canvas.width) * bufferarray.length);
  document.getElementById("end").value = selectionEnd/audiocontext.sampleRate

    }

}

else{


}
    
}

function mouseUp(event) {
if(bufferarray.length>0){

   
    isresize = false;
isdrawing = false;
    
  var rect = canvas.getBoundingClientRect();
  var mouseX = event.clientX - rect.left;
mouseupx = event.clientX
  if (isdrawing === true){

      
      isdrawing = false;
  }

  else if (rectstatus === "left"){
     
      rectstatus = null;

      document.getElementById("start").value = " "
      var selectionEnd = Math.floor((mouseX / canvas.width) * bufferarray.length);
    document.getElementById("start").value = selectionEnd/audiocontext.sampleRate
  }

  else if (rectstatus === "right"){

    
      rectstatus = null;

      document.getElementById("end").value = " "
      var selectionEnd = Math.floor((mouseX / canvas.width) * bufferarray.length);
    document.getElementById("end").value = selectionEnd/audiocontext.sampleRate
  }


  isresize = false;

}

else{

   

}


 
}


function drawline(){


    var canvascontext = document.getElementById('canvas11');
    var newarray = bufferarray.getChannelData(0);
       var canctx = canvascontext.getContext('2d');
       canctx.globalAlpha = 1;
       canctx.clearRect(0,0,canvascontext.width, canvascontext.height)
       canctx.fillStyle = "black"
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

    ctx.fillStyle = "red"; // Set the fill color
    ctx.globalAlpha = 0.2; 

ctx.fillRect(rectx, 0, rectwidth, 150);
}

var starttime1 = 0;
var framestart;
function drawline1(){
    if(bufferarray.length>0){
drawline();
if (source){
    source.stop();
    clearInterval(intervalid12)
    clearInterval(videointerval)
    clearInterval(intervalid)
}

var start = document.getElementById("start").value
var end = document.getElementById("end").value


if (mousedownx===mouseupx){

    rectx = "null"
rectwidth = "null"

play1()






}

}}




function play1(){


    var canvas1212 = document.getElementById("canvas1")

    canvas1212.width = videoinfo.width
    canvas1212.height = videoinfo.height
  
    canvas22.clear();
    canvas22.dispose()
  
      canvas22 = new fabric.Canvas("canvas1", { 
        backgroundColor:"cyan"
    
    }); 

    clearInterval(intervalid);
    
    clearInterval(intervalid12);
    clearInterval(videointerval);
    var start = parseFloat(document.getElementById("start").value);
var end = parseFloat(document.getElementById("end").value);

time = parseInt(start);
starttime1 = start


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





    else{

    
        for(i=0;i<drawing.length;i++){

            for(j=0;j<drawing[i].animationarray.length;j++){
        
              drawing[i].animationarray[j].startvalue=drawing[i].animationarray[j].initialvalue
        
            }
          }

        document.getElementById("timer").innerHTML = time;
        source = audiocontext.createBufferSource();


        const analyser = audiocontext.createAnalyser();
        analyser.fftSize = 2048;
        
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteTimeDomainData(dataArray);
        
        // Connect the source to be analysed
        source.connect(analyser);
         
         source.buffer=bufferarray;
         analyser.connect(audiocontext.destination);
         source.start(0, start);
         drawmarker();
         document.getElementById("duration").innerHTML = source.buffer.duration.toFixed(3);
   
        
         intervalid =   setInterval(()=>{
            time++;
              starttime1++;
            document.getElementById("timer").innerHTML = time;
            framestart = parseInt(starttime1*videoinfo.samplerate)

        
            if (time ===parseInt(source.buffer.duration)){
              
                clearInterval(intervalid)
                clearInterval(videointerval)
                starttime1 = 0;
            }
        
        }, 1000);


    function draw() {


        const canvas = document.getElementById("canvas12");
    const canvasCtx = canvas.getContext("2d");
        requestAnimationFrame(draw);
      
        analyser.getByteTimeDomainData(dataArray);
      
        canvasCtx.fillStyle = "rgb(200, 200, 200)";
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
      
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = "rgb(0, 0, 0)";
      
        canvasCtx.beginPath();
      
        const sliceWidth = (canvas.width * 1.0) / bufferLength;
        let x = 0;
      
        for (let i = 0; i < bufferLength; i++) {
          const v = dataArray[i] / 128.0;
          const y = (v * canvas.height) / 2;
      
          if (i === 0) {
            canvasCtx.moveTo(x, y);
          } else {
            canvasCtx.lineTo(x, y);
          }
      
          x += sliceWidth;
        }
      
        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
      }

draw();

if (videoDecoder1.state==="unconfigured"){

    const options = {
        primaries: "bt709",
          transfer:"bt709",
                            matrix:null,
        fullRange: true,
      };
      var colorspace = new VideoColorSpace(options);

    var config1 = {
        codec:codecinfo,
        codedWidth:videoinfo.width,
          codedHeight:videoinfo.height,
          description:avcC,
     colorSpace: colorspace,
     hardwareAcceleration: "prefer-hardware",
     optimizeForLatency: true,
         
         
                     
        
        
        }
    videoDecoder1.configure(meta);
    }

    framestart = parseInt(start*videoinfo.samplerate);


    videointerval = setInterval (()=>{
    
     
            videoDecoder1.decode(videodata[framestart]);
    
            framestart++;
    
        if(framestart >= videodata.length){
    
           clearInterval(videointerval)
        }
    
    }, 1000/parseInt(videoinfo.samplerate))

    

   
   


    

}




     

  }

function drawmarker(){
    var start = parseFloat(document.getElementById("start").value);
    var end = parseFloat(document.getElementById("end").value);
    
    var final = end-start


var time1=start*20
    var canvas = document.getElementById("canvas11");
    var ctx = canvas.getContext("2d")


   intervalid12 =   setInterval(()=>{

    var newarray = bufferarray.getChannelData(0);
     
       ctx.clearRect(0,0,canvas.width, canvas.height)
       ctx.fillStyle = "black"
       ctx.globalAlpha = 1;
       ctx.beginPath();
       ctx.moveTo(0, canvas.height / 2);
       ctx.lineWidth = 1;
    const topOffset = 10;
    const bottomOffset = 10;
    for (let i = 0; i < newarray.length; i=i+500) {
    const x = i / newarray.length * canvas.width;
    const y = ((newarray[i] + 1) / 2 * (canvas.height - topOffset - bottomOffset)) + topOffset;
    ctx.lineTo(x, y);
    }
    ctx.stroke();

    ctx.fillStyle = "red"; // Set the fill color
    ctx.globalAlpha = 0.2; 

ctx.fillRect(rectx, 0, rectwidth, 150);
   
        time1=time1+1;
        ctx.globalAlpha = 1;
        ctx.fillStyle="yellow"
       var xvalue = ((time1/source.buffer.duration)*canvas.width)/20
     
        ctx.fillRect(xvalue,0,5, 150)
        if (time1 >= parseInt(source.buffer.duration*20)){
            clearInterval(intervalid12);
            time1=start*20;
        }
    
    }, 50);
}


 