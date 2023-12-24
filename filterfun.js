function filterfun(){
    document.getElementById("filterdata").innerHTML = ""

for (i=0;i<filterarray.length;i++){
    var button = document.createElement("button")
    button.id = filterarray[i].id;
    button.innerHTML = "Type: "+filterarray[i].type + " | " + "FrameStart: " + filterarray[i].startvalue+ " | " +"FrameEnd: " + filterarray[i].endvalue
    button.className = "list-group-item list-group-item-action"
    button.classList.add("backgroundclass")
    button.type = "button"
    document.getElementById("filterdata").appendChild(button)


    button.addEventListener("dblclick", function(event){
        document.getElementById("filterdata").innerHTML = ""

        for (j=0;j<filterarray.length;j++){

if(parseInt(filterarray[j].id)===parseInt(event.target.id)){

filterarray.splice(j, 1)

event.target.remove();


filterfun();


}
}
})
}

}