let muxer1 
var mp4Data1
var  videoEncoder1
var audioEncoder1
var abc1 = 0
var offscreen;
var ctx1;
var abc2=0;
var canvas221;

var videoDecoder3 = new VideoDecoder({
  output: processVideo,
  error: onDecoderError,
});
function processVideo(frame){

  Promise.all([
    // Cut out two sprites from the sprite sheet
    createImageBitmap(frame, 0, 0, videoinfo.width, videoinfo.height),
   
  ]).then((sprites) => {
    canvas22.clear();

    var imgInstance = new fabric.Image(sprites[0], {
        left:0,
        top: 0,
        angle: 0,
        opacity: 1
      });


      if(filterarray.length>0){

        for(i=0;i<filterarray.length;i++){

          if(abc2>= parseInt(filterarray[i].startvalue)&&abc2<= parseInt(filterarray[i].endvalue)){

            if(filterarray[i].type ==="grayscale"){

              imgInstance.filters.push(new fabric.Image.filters.Grayscale());

              // apply filters and re-render canvas when done
              imgInstance.applyFilters();
            }

            if(filterarray[i].type ==="sepia"){

              imgInstance.filters.push(new fabric.Image.filters.Sepia());

              // apply filters and re-render canvas when done
              imgInstance.applyFilters();
            }


            if(filterarray[i].type ==="blur"){

              imgInstance.filters.push(new fabric.Image.filters.Blur(

                {
                  blur: 5 // Blur intensity
              }

              ));

              // apply filters and re-render canvas when done
              imgInstance.applyFilters();
            }



            if(filterarray[i].type ==="brightness"){

              imgInstance.filters.push(new fabric.Image.filters.Brightness(


                {
                  brightness: 0.5 // Brightness value (0 to 2)
              }


              ));

              // apply filters and re-render canvas when done
              imgInstance.applyFilters();
            }



            if(filterarray[i].type ==="contrast"){

              imgInstance.filters.push(new fabric.Image.filters.Contrast(

                {
                  contrast: 50 // Contrast value (-100 to 100)
              }
              ));

              // apply filters and re-render canvas when done
              imgInstance.applyFilters();
            }


          }
        }
      }



      canvas22.add(imgInstance);



      if(drawing.length >0){
        for( i = 0;i<drawing.length;i++){
        
          if(drawing[i].animation ===false){
        
            if(abc2>= parseInt(drawing[i].framestart*videoinfo.samplerate)&&abc2<= parseInt(drawing[i].frameend*videoinfo.samplerate)){
        
              canvas22.add(drawing[i])
        
            }
          }
        }
               
        
                   for (i=0;i<drawing.length;i++){
        
                    for(j=0;j<drawing[i].animationarray.length;j++){
        if(drawing[i].animation=true){
                    if(abc2>=parseInt(drawing[i].animationarray[j].framestart*videoinfo.samplerate)&&abc2<=parseInt(drawing[i].animationarray[j].frameend*videoinfo.samplerate)){
        
        drawing[i].animationarray[j].startvalue = drawing[i].animationarray[j].startvalue +drawing[i].animationarray[j].jump
        
        drawing[i].set(drawing[i].animationarray[j].property, drawing[i].animationarray[j].startvalue)
        canvas22.add(drawing[i])
        
        
                    }
                    }
                   }
                  }   
                        }
frame.close();

   
  });


var dataURL = canvas22.toDataURL();

var img = new Image();
img.src = dataURL

img.onload = () => {
  Promise.all([
    // Cut out two sprites from the sprite sheet
    createImageBitmap(img, 0, 0, videoinfo.width, videoinfo.height),
  ]).then((sprites) => {
    
    copyfun1(sprites[0])
  });
};
abc2++;
 
}

function onDecoderError(error){

    console.log(error);
}




const exportdata1 = async ()=>{
  abc1 = 0
  abc2 = 0;

  if(videodata<=0){


  }
else{

  for(i=0;i<drawing.length;i++){

    for(j=0;j<drawing[i].animationarray.length;j++){

      drawing[i].animationarray[j].startvalue=drawing[i].animationarray[j].initialvalue

    }
  }

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
    clearInterval(videointerval)


	if(source){
        source.stop();
    }

    if(source1){
        source1.stop();
    }
    document.getElementById("Spinner").style.display = "block"
    document.getElementById("spinner1").style.display = "block"
    document.getElementById("status").innerHTML = "Encoding in Progress it may take some time";
muxer1 = new Mp4Muxer.Muxer({
		target: new Mp4Muxer.ArrayBufferTarget(),
    video: {
      codec: 'avc',
			width: videoinfo.width,
			height: videoinfo.height,
      frameRate:videoinfo.samplerate,
      duration:source.buffer.duration,
      bitrate:1200000,
      timestamp:1000/videoinfo.samplerate
		},

    audio: {
			codec: 'aac',
			sampleRate: bufferarray.sampleRate,
			numberOfChannels: 1
		},

		// Puts metadata to the start of the file. Since we're using ArrayBufferTarget anyway, this makes no difference
		// to memory footprint.
		fastStart: 'in-memory',

		// Because we're directly pumping a MediaStreamTrack's data into it, which doesn't start at timestamp = 0
		firstTimestampBehavior: 'offset'


	});


    videoEncoder1 = new VideoEncoder({
		output: (chunk, meta) => muxer1.addVideoChunk(chunk, meta),
		error: e => console.error(e)
	});
	videoEncoder1.configure({
		codec: codecinfo,
		width: videoinfo.width,
		height: videoinfo.height,
    frameRate:videoinfo.samplerate,
    duration:source.buffer.duration,
      bitrate:12000000,
      timestamp:1000/videoinfo.samplerate,
      hardwareAcceleration:"prefer-software"
      
    
	});

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
 hardwareAcceleration: "prefer-software",
 optimizeForLatency: true,
     
     
                 
    
    
    }
videoDecoder3.configure(meta);
  
for (i=0;i<videodata.length;i++){

  videoDecoder3.decode(videodata[i]);




}

audioEncoder1 = new AudioEncoder({
			output: (chunk, meta) => muxer1.addAudioChunk(chunk, meta),
			error: e => console.error(e)
		});
		audioEncoder1.configure({
			codec: 'mp4a.40.2',
			numberOfChannels: 1,
			sampleRate: audiocontext.sampleRate,
			bitrate: 128000
		});


    







 
  }


}



const dataexport1 = async()=>{
  var init1 = {

    format: "f32",
    sampleRate: audiocontext.sampleRate,
    data: bufferarray.getChannelData(0), 
    numberOfChannels:1,
    numberOfFrames: bufferarray.sampleRate*bufferarray.duration,
    timestamp:1*bufferarray.duration*100000
  }

  var audiodata = new AudioData(init1)
audioEncoder1.encode(audiodata)
  await audioEncoder1.flush();
  await videoEncoder1.flush();
  muxer1.finalize();
      mp4Data1 = muxer1.target.buffer;
      document.getElementById("Spinner").style.display = "none"
      document.getElementById("spinner1").style.display = "none"
      document.getElementById("status").innerHTML = "";
const blob = new Blob([mp4Data1], {type:'video/mp4', codec: 'avc'});
let url = window.URL.createObjectURL(blob);
	let a = document.createElement('a');
	a.style.display = 'none';
	a.href = url;
	a.download = 'amooiz.mp4';
	document.body.appendChild(a);
	a.click();
	window.URL.revokeObjectURL(url);

}





const copyfun1 = async (frame1)=>{

  const options = {
    primaries: "bt709",
      transfer:"bt709",
                        matrix:null,
    fullRange: true,
  };
  var colorspace = new VideoColorSpace(options);
const init = {
    timestamp: abc1*1000000/videoinfo.samplerate,
    codedWidth: videoinfo.width,
    codedHeight: videoinfo.height,
    format: "NV12",
    duration:37,
    colorSpace: colorspace,
  };
    var videoframe = new VideoFrame(frame1, init)

videoEncoder1.encode(videoframe)
videoframe.close()

document.getElementById("framecount").innerHTML ="Total Video Frames: "+videodata.length+ "<br/> Video Frame Processed: " + abc1



    if (abc1 === videodata.length - 1){
      dataexport1()
      abc1 = 0;
    }

    abc1++;



}