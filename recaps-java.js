document.getElementById('artButton').addEventListener("click",(artPage));
document.getElementById('mapButton').addEventListener("click",(mapPage));
document.getElementById('homeButton').addEventListener("click",(homePage));
document.getElementById('loreButton').addEventListener("click",(lorePage));




//TAB BUTTONS//
function artPage() { 
    window.location.href = "art.html";
}

function mapPage(){
     window.location.href = "map.html"
}

function homePage(){
     window.location.href = "index.html"
}

function lorePage(){
     window.location.href = "lore.html"
}