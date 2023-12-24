const exportdata1 = async ()=>{

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
muxer = new Mp4Muxer.Muxer({
		target: new Mp4Muxer.ArrayBufferTarget(),
    video: {
      codec: 'avc',
			width: videoinfo.width,
			height: videoinfo.height,
      frameRate:videoinfo.samplerate,
      duration:1000/videoinfo.samplerate,
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


    videoEncoder = new VideoEncoder({
		output: (chunk, meta) => muxer.addVideoChunk(chunk, meta),
		error: e => console.error(e)
	});
	videoEncoder.configure({
		codec: 'avc1.42001f',
		width: videoinfo.width,
		height: videoinfo.height,
    frameRate:videoinfo.samplerate,
    duration:1000/videoinfo.samplerate,
      bitrate:1200000,
      timestamp:1000/videoinfo.samplerate
    
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
 hardwareAcceleration: "prefer-hardware",
 optimizeForLatency: true,
     
     
                 
    
    
    }
videoDecoder2.configure(meta);
  
for (i=0;i<videodata.length;i++){

    if (i===0){

        muxer.addVideoChunk(videodata[0], metadata);

    }

    else{

        muxer.addVideoChunk(videodata[i], metadata);
    }






}

audioEncoder = new AudioEncoder({
			output: (chunk, meta) => muxer.addAudioChunk(chunk, meta),
			error: e => console.error(e)
		});
		audioEncoder.configure({
			codec: 'mp4a.40.2',
			numberOfChannels: 1,
			sampleRate: audiocontext.sampleRate,
			bitrate: 128000
		});


    
        var init1 = {

            format: "f32",
            sampleRate: audiocontext.sampleRate,
            data: bufferarray.getChannelData(0), 
            numberOfChannels:1,
            numberOfFrames: bufferarray.sampleRate*bufferarray.duration,
            timestamp:1*bufferarray.duration*100000
          }
        
          var audiodata = new AudioData(init1)
        audioEncoder.encode(audiodata)
          await audioEncoder.flush();
          muxer.finalize();
              mp4Data = muxer.target.buffer;
              document.getElementById("Spinner").style.display = "none"
              document.getElementById("spinner1").style.display = "none"
              document.getElementById("status").innerHTML = "";
        const blob = new Blob([mp4Data], {type:'video/mp4', codec: 'avc'});
        let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'amooiz.mp4';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);






 
 


}



const dataexport1 = async()=>{
  

}



