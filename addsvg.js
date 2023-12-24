


function addsvg1(){


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
    
      // Check if the selected file is an SVG
      if (selectedFile.type === "image/svg+xml") {
        const reader = new FileReader();
        reader.onload = function(event) {
          const svgString = event.target.result;
    
          // Load SVG from a string
          fabric.loadSVGFromString(svgString, function(objects, options) {
            const loadedObjects = fabric.util.groupSVGElements(objects, options);
            
            loadedObjects.set({
              left: 0,
              top: 0,
              opacity: 1,
              
            });
    
            loadedObjects.id = drawingid;
    
            loadedObjects.on("mousedown", function(options) {
              selectedid = options.target.id;
            });
    
            loadedObjects.framestart = start;
            loadedObjects.frameend = end;
            loadedObjects.animation = false;
            loadedObjects.type = "SVG"
            loadedObjects.animationarray = []
            drawing.push(loadedObjects);


          remove();





            canvas22.add(drawing[drawing.length - 1]);
          });
        };
        reader.readAsText(selectedFile);
      } else {
        console.log("Please select an SVG file.");
      }
    });
    
    document.body.appendChild(input);
    input.click();



}
}













