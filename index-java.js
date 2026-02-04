
document.getElementById('sessionButton').addEventListener("click",(sessionPage));
document.getElementById('mapButton').addEventListener("click",(mapPage));
document.getElementById('artButton').addEventListener("click",(artPage));
document.getElementById('loreButton').addEventListener("click",(lorePage));

function sessionPage() { 
    window.location.href = "recaps.html";
}

function mapPage(){
     window.location.href = "map.html"
}

function artPage(){
     window.location.href = "art.html"
}

function lorePage(){
     window.location.href = "lore.html"
}