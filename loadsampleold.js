

function loadsample() {

    document.getElementById("status").innerHTML = "Loading and decoding file..."
    document.getElementById("Spinner").style.display = "block"
    document.getElementById("spinner1").style.display = "block"

     
            clearInterval(intervalid);
    
        if (audiocontext === undefined){
     
     audiocontext= new AudioContext();
    }
    
    
    if (source){
     source.stop();
    }

    fetch('videosample.mp4')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.arrayBuffer();
    })
    .then(audiodata => {

        var extractaudiodata = audiodata.slice(0, audiodata.byteLength)

        audiocontext.decodeAudioData(audiodata, function(audiofile){
       
        
            if (bufferarray.length >0){
    
                var array3 = audiocontext.createBuffer(bufferarray.numberOfChannels, bufferarray.length, bufferarray.sampleRate);
                var array3channel = array3.getChannelData(0)
                array3channel.set(bufferarray.getChannelData(0), 0)
    
                if(bufferarray.numberOfChannels >1){
                    array4channel = array3.getChannelData(1)
                    array4channel.set(bufferarray.getChannelData(1), 0)
                }
                            if (undo.length ===3){
                    
                                undo.splice(0, 1)
                                undo1.splice(0, 1)
                    
                                
                            }
                            var array50 = [...videodata]
                            undo.push(array3);
                            undo1.push(array50);
    
                var combinedbuffer1 = audiocontext.createBuffer(audiofile.numberOfChannels, audiofile.length+bufferarray.length, audiofile.sampleRate)
                var newbuffer1 = combinedbuffer1.getChannelData(0)
                newbuffer1.set(bufferarray.getChannelData(0), 0)
                newbuffer1.set(audiofile.getChannelData(0), bufferarray.length)
    
                if(audiofile.numberOfChannles>1){
                newbuffer1.set(bufferarray.getChannelData(1), 0)
                newbuffer1.set(audiofile.getChannelData(1), bufferarray.length)
            }
                bufferarray = combinedbuffer1;
    
    
               
                
                
                }
                
                else{
                   bufferarray = audiofile
    
              
                }
        
            document.getElementById("totallength").innerHTML=bufferarray.length;
            source = audiocontext.createBufferSource();
        check = 1;
        
            time = parseInt(sourceduration);
           
            
            document.getElementById("error").innerHTML = "";
        
        
         var canvascontext = document.getElementById('canvas11');
    var newarray = bufferarray.getChannelData(0);
       var canctx = canvascontext.getContext('2d');
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
        
        
        
           
    const analyser = audiocontext.createAnalyser();
analyser.fftSize = 2048;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// Connect the source to be analysed
source.connect(analyser);
 
 source.buffer=bufferarray;
 analyser.connect(audiocontext.destination);           
              



               source.start(0, 0, 0);
               sourceduration = source.buffer.duration;
               drawtime();
               document.getElementById("duration").innerHTML = source.buffer.duration.toFixed(3);
        
           if (source.buffer.duration>=1){
     
        }
        document.getElementById("status").innerHTML = "";
        document.getElementById("Spinner").style.display = "none"
        document.getElementById("spinner1").style.display = "none"
         
    
    
    
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
    
    
    

     //videofile
   //videofile

   var mp4boxfile = MP4Box.createFile();
   mp4boxfile.onReady = function(info) {

       document.getElementById("status").innerHTML = "";
document.getElementById("Spinner").style.display = "block"
document.getElementById("spinner1").style.display = "block"

   codecinfo = info.videoTracks[0].codec;

   var movieduration = info.videoTracks[0].movie_duration
   var movietimescale = info.videoTracks[0].movie_timescale
   var samplelength = info.videoTracks[0].nb_samples;
   var durationinseconds = movieduration/movietimescale;
numberofsamples=samplelength;
   videoinfo.samplerate =Math.round( samplelength/durationinseconds);

  videoinfo.height = info.videoTracks[0].track_height;
   videoinfo.width=info.videoTracks[0].track_width;

  
   var canvas = document.getElementById("canvas1")

   canvas.width = videoinfo.width
   canvas.height = videoinfo.height

   canvas22 = new fabric.Canvas("canvas1", { 
    backgroundColor:"cyan",})
 



mp4boxfile.setExtractionOptions(1, null, {nbSamples:8000});  
mp4boxfile.start();
mp4boxfile.onSamples = function (id, user, samples) {

if (id===1){

   if(samples[0].number === 0){
   

       if(id===1){
       var avccext = extractaudiodata;
       avcC = avccext.slice(
       samples[0].description.boxes[0].start+samples[0].description.boxes[0].hdr_size, samples[0].description.boxes[0].start+samples[0].description.boxes[0].size)
   
       
       
       
       }
       }
   if (videoDecoder.state==="unconfigured"){

       const options = {
           primaries: "bt709",
             transfer:"bt709",
                               matrix:null,
           fullRange: true,
         };
         var colorspace = new VideoColorSpace(options);

       var config = {
           codec:codecinfo,
           codedWidth:videoinfo.width,
             codedHeight: videoinfo.height,
             
             description:avcC,
       
        colorSpace: colorspace,
        hardwareAcceleration: "prefer-software",
        optimizeForLatency: true,
            
            
                        
           
           
           }
       videoDecoder.configure(config);



       const encoderConfig = {
           codec: 'avc1.42001f',
           width: videoinfo.width,
           height: videoinfo.height,
           hardwareAcceleration:"prefer-hardware",
           framerate: codecinfo.samplerate,
           latencyMode: "realtime",
         };
         encoder.configure(encoderConfig);
   

       var  init  = {
           type: 'key',
           data: samples[0].data,
           timestamp: 0,
           duration: 37,
           }; 
           
           var chunk = new EncodedVideoChunk(init);
           
           videoDecoder.decode(chunk);



   }






var counter = 0;

while(counter<samples.length){

   var  init  = {
       type: 'delta',
       data: samples[counter].data,
       timestamp: parseInt(counter*1000000/videoinfo.samplerate),
       duration: 37,
       }; 
       
       var chunk = new EncodedVideoChunk(init);
       
       videoDecoder.decode(chunk);
   
       keyframe = samples[0].data
   
   counter++;
}






}








}


}
  var buffer =  extractaudiodata;
  buffer.fileStart = 0;

   mp4boxfile.appendBuffer(buffer);
mp4boxfile.flush();

        })
    
     
   
   
   
   
   
   
        })
    .catch(error => {
        document.getElementById("status").innerHTML = "";
        document.getElementById("error").innerHTML = "Cannot open file"
        document.getElementById("Spinner").style.display = "none"
        document.getElementById("spinner1").style.display = "none"
    });
  
  
  


    
    
    
    
      
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
            ctx1.fillText(parseInt(i*scale), x, 12)
            ctx1.fillText("|", x+38, 12)
        }
        console.log("helloworld")
         }