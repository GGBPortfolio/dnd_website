document.getElementById('artButton').addEventListener("click",(artPage));
document.getElementById('mapButton').addEventListener("click",(mapPage));
document.getElementById('homeButton').addEventListener("click",(homePage));
document.getElementById('loreButton').addEventListener("click",(lorePage));




const textFiles = ["test.txt", "test2.txt", "teat3.txt"];
const output = document.getElementById("output");
let specificSesh = 0;

fetch(textFiles[specificSesh])
     .then(res => res.text())
     .then(text => {
          output.innerHTML = "<h3>" + text + "</h3>";
     });

   function seshGridClick(num){
     fetch(textFiles[num])
     .then(res => res.text())
     .then(text => {
          output.innerHTML = "<h3>" + text + "</h3>";
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