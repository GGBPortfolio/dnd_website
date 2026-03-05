document.getElementById('artButton').addEventListener("click",(artPage));
document.getElementById('mapButton').addEventListener("click",(mapPage));
document.getElementById('homeButton').addEventListener("click",(homePage));
document.getElementById('sessionButton').addEventListener("click",(sessionPage));

const textFiles = ["Lore/Deco's Backstory.md", "Lore/Gordon's backstory.md", "Lore/Timmy's Backstory.md", "Lore/Jake Backstory First Draft.md", "Lore/James' Backstory.md", "Lore/Mark's Backstory.md", "Lore/Pierce Backstory.md"];

const output = document.getElementById("output");
let specificSesh = 0;

fetch(textFiles[specificSesh])
     .then(res => res.text())
     .then(text => {
          output.innerHTML = "<p>" + text + "</p>";
     });

   function loreGridClick(num){
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

function sessionPage(){
     window.location.href = "recaps.html";
}