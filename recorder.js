let mediaRecorder;
let chunks = [];


function recorder(){


    if (source){

        source.stop();
    }

    if (source1){
        source1.stop()
    }

    else{

    }

    clearInterval(intervalid);
    clearInterval(intervalid12);
    clearInterval(videointerval);

    document.getElementById("recorder1").style.display ="none";
    document.getElementById("stopreco").style.display = "block";

    intervalid =   setInterval(()=>{
        time++;
    document.getElementById("timer").innerHTML = time;

  
    
}, 1000);


    navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                chunks.push(event.data);
 
             updateWaveform();
                

            }
        };

        mediaRecorder.onstop = () => {

            document.getElementById("recorder1").style.display ="block";
            document.getElementById("stopreco").style.display = "none";

            clearInterval(intervalid);
            const recordedBlob = new Blob(chunks, { type: 'audio/wav' });
chunks=[];
            const reader = new FileReader();
            reader.onload = function (e) {
                const arrayBuffer = e.target.result;

                if(arrayBuffer.byteLength>0){

               audiocontext = new AudioContext()
                audiocontext.decodeAudioData(arrayBuffer, function(audiofile){
       
        
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
                                       
                            
                                        
                                    }
                            
                                    undo.push(array3);
            
            
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
                
                
                
                   
                       
                       source.buffer=bufferarray;
                       source.connect(audiocontext.destination);
                       source.start(0, sourceduration);
                       sourceduration = source.buffer.duration;
                       
                       document.getElementById("duration").innerHTML = source.buffer.duration.toFixed(3);
                
                   if (source.buffer.duration>=1){
                intervalid =   setInterval(()=>{
                        time++;
                    document.getElementById("timer").innerHTML = time;
                
                    if (time ===parseInt(source.buffer.duration)){
                        clearInterval(intervalid);
                    }
                    
                }, 1000);
                }
                document.getElementById("status").innerHTML = "";
                document.getElementById("Spinner").style.display = "none"
                document.getElementById("spinner1").style.display = "none"
                   }).catch(function(error){
                    document.getElementById("status").innerHTML = "";
                    document.getElementById("Spinner").style.display = "none"
                    document.getElementById("spinner1").style.display = "none"
            
                    document.getElementById("error").innerHTML = "Cannot open file"
                   });
                }
            };
            reader.readAsArrayBuffer(recordedBlob);
        
           
     
          
            
        };

        mediaRecorder.start(100);
      
    })
    .catch((error) => {
        console.error('Error accessing microphone:', error);
    })


   
}


function stopRecording() {
    if (mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
        
    }
}



function updateWaveform() {
    // Convert the recorded audio data to a Blob
    const blob = new Blob(chunks, { type: 'audio/wav' });

    // Use FileReader to read the Blob as an array buffer
    const reader = new FileReader();
    reader.onloadend = function () {
        if (reader.result instanceof ArrayBuffer) {
            audiocontext = new AudioContext();
            audiocontext.decodeAudioData(reader.result, function (buffer) {
                // Update the WaveSurfer.js instance with the new audio buffer
              

                var newarray = buffer.getChannelData(0)

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
                for (let i = 0; i < newarray.length; i=i+500) {
                const x = i / newarray.length * canvascontext.width;
                const y = ((newarray[i] + 1) / 2 * (canvascontext.height - topOffset - bottomOffset)) + topOffset;
                canctx.lineTo(x, y);
                }
                canctx.stroke();
            });
        }
    };
    reader.readAsArrayBuffer(blob);
}
