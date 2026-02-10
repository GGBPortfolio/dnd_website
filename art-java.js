document.getElementById('nextButton').addEventListener("click",(nextImage));
document.getElementById('prevButton').addEventListener("click",(prevImage));



const imageMapArray = ["images/maps/First Impression Tavern.png", "images/maps/Campfire 1.png", "images/maps/Campfire 2.png", "images/maps/Road 1 (copy).png", 
    "images/maps/road 2 (copy).png", "images/maps/Olburr Sootfoot big.png","images/maps/Demonic Sewer.png", "images/maps/Cpt Drum Big.png", 
    "images/maps/Kobold Den (Underdark Tunnel Entrance).png", "images/maps/Druid Auction.png", "images/maps/Druid Auction FL 2.png", "images/maps/Crab Fungal Cave.png",
    "images/maps/Crab Fungal Cave p1.png", "images/maps/Pirate Shipwreck.png", "images/maps/Rice fields.png", "images/maps/Toll House Ambush.png", 
    "images/maps/Petty Pistol Bar.png", "images/maps/Oni Trade on the Water.png", "images/maps/Witch's Swamp.png", "images/maps/Sewer 4.png", 
    "images/maps/Sewer Dundal - RP.png", "images/maps/Costal Ruins.png", "images/maps/Temple of Cercie (1).png"]

//TILE LIBRARY NEXT TO IT??//

const listSizeMaps = imageMapArray.length;
let currentIndex = 0;


document.getElementById('myImage').src = imageMapArray[currentIndex];

function nextImage(){
    if (currentIndex + 1 == listSizeMaps){
        currentIndex = 0;
        myImage.src = imageMapArray[currentIndex];
    }
    else {
        currentIndex++;
        myImage.src = imageMapArray[currentIndex];
        console.log(listSizeMaps)
    }
    
}

function prevImage(){
    if (currentIndex == 0) {
        currentIndex = listSizeMaps - 1;
        myImage.src = imageMapArray[currentIndex]; 
    }
    else {
        currentIndex--; 
        myImage.src = imageMapArray[currentIndex];
    }

}

function mapGridClick (num){
    currentIndex = num;
    myImage.src = imageMapArray[currentIndex];
}