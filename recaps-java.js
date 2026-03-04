document.getElementById('artButton').addEventListener("click",(artPage));
document.getElementById('mapButton').addEventListener("click",(mapPage));
document.getElementById('homeButton').addEventListener("click",(homePage));
document.getElementById('loreButton').addEventListener("click",(lorePage));




const textFiles = ["session recaps/SESSION_1+2.md", "session recaps/SESSION_3.md", "session recaps/SESSION_4.MD", "session recaps/SESSION_5.MD",
                    "session recaps/SESSION_6.MD", "session recaps/SESSION_7.MD", "session recaps/SESSION_8.MD", "session recaps/SESSION_9.MD",
                    "session recaps/SESSION_10.MD", "session recaps/SESSION_11.MD", "session recaps/SESSION_12.MD", "session recaps/SESSION_13.MD",
                    "session recaps/SESSION_14+15.MD", "session recaps/SESSION_16.MD", "session recaps/SESSION_17.MD", "session recaps/SESSION_18.MD",
                    "session recaps/SESSION_19+20.MD", "session recaps/SESSION_21.MD", "session recaps/SESSION_22.MD", "session recaps/SESSION_23.MD",
                    "session recaps/SESSION_24+25.MD"];
const output = document.getElementById("output");
let specificSesh = 0;

fetch(textFiles[specificSesh])
     .then(res => res.text())
     .then(text => {
          output.innerHTML = "<p>" + text + "</p>";
     });

   function seshGridClick(num){
     fetch(textFiles[num])
     .then(res => res.text())
     .then(text => {
          output.innerHTML = "<p>" + text + "</p>";
     });
   }  




//TAB BUTTONS//
function artPage() { 
    window.location.href = "art.html";
}

function mapPage(){
     window.location.href = "map.html";
}

function homePage(){
     window.location.href = "index.html";
}

function lorePage(){
     window.location.href = "lore.html";
}