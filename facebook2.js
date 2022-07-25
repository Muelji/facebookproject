
var input = document.querySelector(".input")
var button = document.querySelector(".add")
var sdiv = document.querySelector(".secondd")
var dis =  document.querySelector(".dis")

button.addEventListener("click", function (){

    var y = document.createElement("div");
    y.className = "cdiv"
    var z = document.createElement("br");
     var d = document.createElement("div");
     d.className = "is"

    y.append(document.createTextNode(input.value));

    sdiv.append(d,y);
    input.value = "";


}
)






























// var button = document.getElementById("enter")
// var input = document.getElementById("userinput")
// var ul = document.querySelector("ul")

// button.addEventListener("click", function(){
//       var x = document.createElement("li");
     

//       if(input.value !==""){ alert("Are you sure about adding this comment")
        
//       x.append(document.createTextNode(input.value));

//      ul.append(x);
    
//     input.value="";
//         }
//         else(alert("pls add a comment"))
//     }
// )


// input.addEventListener("keypress", function(event){
//     var x = document.createElement("li");

//     if (event.key=="Enter"){
//         if(input.value !==""){
//         x.append(document.createTextNode(input.value));
         
//             ul.append(x);
            
//             input.value="";
//         }
        
//     }

// }
// )








{/* <input class="photo" type="file"  name="img" accept="image/*"></div> */}