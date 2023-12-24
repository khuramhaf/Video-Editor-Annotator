function remove(){


document.getElementById("removegraphics").innerHTML = ""

for(i=0;i<drawing.length;i++){
    var button = document.createElement("button")
    button.id = drawing[i].id;
    button.innerHTML = "Type: "+drawing[i].type + " | " + "StartTime: " + drawing[i].framestart.toFixed(3) + " | " +"EndTime: " + drawing[i].frameend.toFixed(3)
    button.className = "list-group-item list-group-item-action"
    button.classList.add("backgroundclass")
    button.type = "button"
    document.getElementById("removegraphics").appendChild(button)

    button.addEventListener("dblclick", function(event){

                      for (i=0;i<drawing.length;i++){

        if(parseInt(drawing[i].id)===parseInt(event.target.id)){

            drawing.splice(i, 1)

         event.target.remove();
         document.getElementById("animationadd").innerHTML = ""

canvas22.clear()
         for(i=0;i<drawing.length;i++){

            canvas22.add(drawing[i])
         }

           
            
        }
    }
    })
   


    button.addEventListener("click", function(event){
        canvas22.clear();
        selectedid = event.target.id

        for(i=0;i<drawing.length;i++){

            if(drawing[i].id===parseInt(event.target.id)){
canvas22.add(drawing[i])
}
           


        }

        
    var uibuttons =  document.getElementsByClassName("backgroundclass")

    for (i=0;i<uibuttons.length;i++){

        uibuttons[i].style.backgroundColor = "white"
        
        uibuttons[i].style.color = "black"
    }

        event.target.style.backgroundColor = "blue"
        event.target.style.color = "white"
    
        document.getElementById("animationadd").innerHTML = ""
    
       for(i=0;i<drawing.length;i++){
    if(parseInt(drawing[i].id) === parseInt(event.target.id)){
    
    for(j=0;j<drawing[i].animationarray.length;j++){
    
    var button2 = document.createElement("button")
    button2.id = drawing[i].animationarray[j].animationid;
    button2.innerHTML = "Type "+drawing[i].animationarray[j].property + " | " + "StartTime: " + drawing[i].animationarray[j].framestart.toFixed(3) + " | " +"EndTime: " + drawing[i].animationarray[j].frameend.toFixed(3)  + " | " + "From: " + drawing[i].animationarray[j].initialvalue.toFixed(3) + " | " + "To: "+drawing[i].animationarray[j].endvalue.toFixed(3)
    button2.className = "list-group-item list-group-item-action", "col-6"
    button2.type = "button"
    
    
    
    button2.addEventListener("dblclick", function(event){

        event.target.remove();
    
        for (i=0;i<drawing.length;i++){
            for(j=0;j<drawing[i].animationarray.length;j++){
            
                if(parseInt(event.target.id) === drawing[i].animationarray[j].animationid){
           
                    drawing[i].animationarray.splice(j, 1)
    
                    if(drawing[i].animationarray.length<=0){
    
                        drawing[i].animation = false
                    }
                }
            }
            
                }
    
    
                
    })
    
    document.getElementById("animationadd").appendChild(button2)
    
    
    }
    }
    
       }
    })






}}