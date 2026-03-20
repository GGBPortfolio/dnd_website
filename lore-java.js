document.getElementById('artButton').addEventListener("click",(artPage));
document.getElementById('mapButton').addEventListener("click",(mapPage));
document.getElementById('homeButton').addEventListener("click",(homePage));
document.getElementById('sessionButton').addEventListener("click",(sessionPage));

const textFiles = ["Lore/Deco's Backstory.md", "Lore/Gordon's backstory.md", "Lore/Timmy's Backstory.md", "Lore/Jake Backstory First Draft.md", "Lore/James' Backstory.md", "Lore/Mark's Backstory.md", "Lore/Pierce Backstory.md", "Lore/SemajDream.md", "Lore/AngussDream.md", "Lore/HackDream.md", "Lore/MordosDream.md", "Lore/TimbleDream.md", "Lore/VeyronDream.md", "Lore/ZellicekDream.md", "Lore/A Message from Glassya.md", "Lore/newGlasyaMessage.md",
     "Lore/Copy of From Kids To Kings EDITOR.md", "Lore/Town Crier News BARRONIA.md", "Lore/ROYAL DECREE_ BARRONIA .md", "Lore/Coronation QnA.md", "Lore/The Mirror Wings.md", "Lore/Grand Barrett Palace_ Emergency Court Meeting.md", "Lore/Gavyn and Einar Meeting_ PALOMERAS.md", "Lore/Einar x Brozzerious_ Marble City.md",
     "Lore/BOOK Excerpt_ Druid Nations.md", "Lore/BOOK Excerpt_ Einar.md"
];

//Page will load the Dreams section//
const output = document.getElementById("output");
let specificSesh = 0;

fetch(textFiles[specificSesh])
     .then(res => res.text())
     .then(text => {
          output.innerHTML = "<p>" + text + "</p>";
     });

//Page will load the Events section//     
const output2 = document.getElementById("output2");
let specificSesh2 = 16;

fetch(textFiles[specificSesh2])
     .then(res => res.text())
     .then(text => {
          document.getElementById("output2").innerHTML = marked.parse(text);
     });

//Page will load the Letters section//
const output3 = document.getElementById("output3");
let specificSesh3 = 24;

fetch(textFiles[specificSesh3])
     .then(res => res.text())
     .then(text => {
          document.getElementById("output3").innerHTML = marked.parse(text);
     });


     //OLD Function still here for the first few buttons (LAZY, FIX LATER)//
function loreGridClick(num){
     fetch(textFiles[num])
     .then(res => res.text())
     .then(text => {
          output.innerHTML = "<p>" + text + "</p>";
     });
   }  
//NEW FUNCTION, converts .md to html//
//DREAMS & PREMONITIONS//
function newGridClick(num){
     fetch(textFiles[num])
     .then(response => response.text())
     .then(text => {
     document.getElementById("output").innerHTML = marked.parse(text);
  }); 
}

//EVENTS & ANNOUNCEMENTS//
function newGridClick2(num){
     fetch(textFiles[num])
     .then(response => response.text())
     .then(text => {
     document.getElementById("output2").innerHTML = marked.parse(text);
  }); 
}

//LETTERS & DOCUMENTS//
function newGridClick3(num){
     fetch(textFiles[num])
     .then(response => response.text())
     .then(text => {
     document.getElementById("output3").innerHTML = marked.parse(text);
  }); 
}
   

///NO LONGER IN USE///
   fetch("Lore/CROWN Charts & MAGIC SHOPPE.md")
  .then(response => response.text())
  .then(text => {
    document.getElementById("content").innerHTML = marked.parse(text);
  });


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