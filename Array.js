const cars  = ["BMW","Audi","Scoda","Benz"];
let txt = "<ul>";
cars.forEach(myFunc);
txt += "</ul>";
        
 document.getElementById("demo").innerHTML = txt;
 function myFunc(carName) {
     txt += "<li>" + carName + "</li>"
 }
     
    
