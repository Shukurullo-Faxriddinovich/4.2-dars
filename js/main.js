var elBtnRec = document.querySelector(".btn-rec");
var elBody = document.querySelector(".body");
var elBox = document.querySelector(".box");
var elUser = document.querySelector(".user");
var record = new webkitSpeechRecognition();

record.lang = "uz-UZ"
  


record.onend = function(){
  console.log("-------------- Aloqa tugadi --------------");
}


record.onerror = function(){
  console.log("-------------- Xatolik yuz berdi --------------");
}

var newText = document.createElement("p");
    newText.textContent = "Magazinimizga hush kelibsiz";
    newText.setAttribute("class", "text");
    elUser.appendChild(newText);

record.onresult = function(evt){
  
  var command = evt["results"][0][0]["transcript"];
  
  

  if(command.includes("bosh kiyim")){
    elBody.classList.add("box1");
    elBody.classList.remove("box2");
    elBody.classList.remove("box3");
    elBody.classList.remove("box4");
    elBody.classList.remove("box5");
    
  }

  if(command.includes("kastum")){
  
    elBody.classList.add("box2");
    elBody.classList.remove("box1");
    elBody.classList.remove("box3");
    elBody.classList.remove("box4");
    elBody.classList.remove("box5");
   
  }

  if(command.includes("kurtka")){
    
    elBody.classList.add("box3");
    elBody.classList.remove("box1");
    elBody.classList.remove("box2");
    elBody.classList.remove("box4");
    elBody.classList.remove("box5");

  }

  if(command.includes("ko'ylak")){
    
    elBody.classList.add("box4");
    elBody.classList.remove("box1");
    elBody.classList.remove("box2");
    elBody.classList.remove("box3");
    elBody.classList.remove("box5");

    
  }

  if(command.includes("oyoq kiyim")){
    elBody.classList.remove("box1");
    elBody.classList.remove("box2");
    elBody.classList.remove("box3");
    elBody.classList.remove("box4");
    elBody.classList.add("box5");

  }

}


elBtnRec.addEventListener("click", function(){
  console.log("-------------- Aloqa boshlandi --------------");
  record.start();
})