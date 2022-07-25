var database = [
    {
    email: "damos@gmail.com",   
    password: "damos"
    },

    {
      email: "samah@gmail.com",   
      password: "samah"
    },
    {
      email: "maryam@gmail",   
      password: "maryam"
    },

    {
      email: "rasheed@gmail.com",   
      password: "rasheed"
    },
    {
      email: "isreal@gmail.com",   
      password: "isreal"
    },
    {
      email: "martins@gmail.com",   
      password: "martins2000"
    },
    {
      email: "gabby@gmail.com",   
      password: "gabby2000"
    },
    {
      email: "daniel@gmail.com",   
      password: "daniel"
    },
    {
      email: "oluniyi@gmail.com",   
      password: "olu2000"
    },
    {
      email:"eben@gmail.com",   
      password: "eben2000"
    }
]



  var input1 = document.querySelector(".input1")
  var input2 = document.querySelector(".input2")
  var login = document.querySelector(".login")
  var register = document.querySelector(".register")
  var log = document.querySelector("#log")
  var fom1 = document.querySelector(".form1")
  var bigfom =  document.querySelector(".form")
  var bign = document.querySelector(".bignav")



function isUserValid(email,password){
   
    for(var i = 0; i<database.length; i++){
 if(database[i].email===email && database[i].password===password){return true;}
    // input1.value = "";
    // input2.value = "";
   }
return false;     
}

      
function frender(email,password){
var email = input1.value;
var password = input2.value;

    if(isUserValid(email,password)){ window.open('facebook2.html')}

else{alert("Dear user, please input a correct Email or Password");  window.open('facebook.html') }
}


login.addEventListener("click", frender)


bigfom.addEventListener("mouseover", function(){

fom1.className = "fom"; bigfom.className = "bigfom"; bign.className = "bign" 

})


bigfom.addEventListener("mouseleave", function(){

  fom1.className = "form1"; bigfom.className = "form"; bign.className = "bignav" 
  
  })
