


function addimage1(){


    rectx = "null"
    rectwidth = "null"
    clearInterval(intervalid);
    clearInterval(intervalid12);
    clearInterval(videointerval)

        var start = parseFloat(document.getElementById("start").value);
    var end = parseFloat(document.getElementById("end").value);
   
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

    const input = document.createElement('input');
    input.type = 'file';
    input.style.display = 'none'; // Hide the input element
    input.addEventListener('change', (e) => {
      const selectedFile = e.target.files[0];
    
      // Create an HTMLImageElement to load the selected file
      const reader = new FileReader();
      reader.onload = function(event) {
        const imgElement = new Image();
        imgElement.onload = function() {
          const imgInstance = new fabric.Image(imgElement, {
            left: 0,
            top: 0,
            angle: 0,
           
            opacity: 1,
          });
    
          imgInstance.id = drawingid;
          drawingid++;
    
          imgInstance.on("mousedown", function(options) {
            selectedid = options.target.id;
          });
    
          imgInstance.framestart = start;
          imgInstance.frameend = end;
          imgInstance.animation = false;
          imgInstance.type = "Image"
          imgInstance.animationarray = []

          drawing.push(imgInstance);

         remove();





          canvas22.add(drawing[drawing.length - 1]);
        };
        imgElement.src = event.target.result;
      };
      reader.readAsDataURL(selectedFile);
    });
    
    document.body.appendChild(input); // Append input to the DOM
    
    // Programmatically trigger a click event on the input element
    input.click();





}
}






