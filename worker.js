importScripts('https://cdn.jsdelivr.net/npm/lamejs@1.2.0/lame.min.js');



onmessage = function (event) {
  const myArray = event.data;

if(event.data.data2 != null){


  const array = myArray.data1;
  const array2 = myArray.data2
  const mp3Data = [];

  const samplesLeft = new Int16Array(array.length);
  const samplesRight = new Int16Array(array.length);

  for (let i = 0; i < array.length; i++) {
    // Split the stereo audio data into left and right channels
    samplesLeft[i] = array[i] * 0x7FFF;
    samplesRight[i] = array2[i] * 0x7FFF;
  }

  // Create a Lame encoder with 2 channels (stereo) and the desired bitrate
  const mp3encoder = new lamejs.Mp3Encoder(2, myArray.samplerate, 128);

  // Encode the left and right channels separately
  const mp3TmpLeft = mp3encoder.encodeBuffer(samplesLeft, samplesRight);
  
  mp3encoder.flush();
  // Push the encoded data for both channels into the mp3Data array
  mp3Data.push(mp3TmpLeft);

  postMessage(mp3Data);
}
else{

  const array = myArray.data1;
  const mp3Data = [];

  const samplesLeft = new Int16Array(array.length);

  for (let i = 0; i < array.length; i++) {
    // Split the stereo audio data into left and right channels
    samplesLeft[i] = array[i] * 0x7FFF;
  }

  // Create a Lame encoder with 2 channels (stereo) and the desired bitrate
  const mp3encoder = new lamejs.Mp3Encoder(1, myArray.samplerate, 128);

  // Encode the left and right channels separately
  const mp3TmpLeft = mp3encoder.encodeBuffer(samplesLeft);
  
  mp3encoder.flush();
  // Push the encoded data for both channels into the mp3Data array
  mp3Data.push(mp3TmpLeft);

  postMessage(mp3Data);

}
}


  
       
  