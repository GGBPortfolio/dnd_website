document.getElementById('sessionButton').addEventListener("click",(sessionPage));
document.getElementById('mapButton').addEventListener("click",(mapPage));
document.getElementById('homeButton').addEventListener("click",(homePage));
document.getElementById('loreButton').addEventListener("click",(lorePage));

document.getElementById('nextButton').addEventListener("click",(nextImage));
document.getElementById('prevButton').addEventListener("click",(prevImage));

document.getElementById('nextArtButton').addEventListener("click",(nextArtImage));
document.getElementById('prevArtButton').addEventListener("click",(prevArtImage));

// COMBAT MAP SECCTION //

const imageMapArray = ["images/maps/First Impression Tavern.png", "images/maps/Campfire 1.png", "images/maps/Campfire 2.png", "images/maps/Road 1 (copy).png", 
    "images/maps/road 2 (copy).png", "images/maps/Olburr Sootfoot big.png","images/maps/Demonic Sewer.png", "images/maps/Cpt Drum Big.png", 
    "images/maps/Kobold Den (Underdark Tunnel Entrance).png", "images/maps/Druid Auction.png", "images/maps/Druid Auction FL 2.png", "images/maps/Crab Fungal Cave.png",
    "images/maps/Crab Fungal Cave p1.png", "images/maps/Pirate Shipwreck.png", "images/maps/Rice fields.png", "images/maps/Toll House Ambush.png", 
    "images/maps/Petty Pistol Bar.png", "images/maps/Oni Trade on the Water.png", "images/maps/Witch's Swamp.png", "images/maps/Sewer 4.png", 
    "images/maps/Sewer Dundal - RP.png","images/maps/Costal Ruins.png", "images/maps/Feywild Ballroom with Golden Throne.png", "images/maps/Temple of Cercie (1).png"]

const mapSentences = ["This is the First Impression Tavern, where our heros' journey began.", "This is one of many travel assets prepared in case of random encounter confrontations (Campfire 1)", "This is one of many travel assets prepared in case of random encounter confrontations (Campfire 2).",
    "This is one of many travel assets prepared in case of random encounter confrontations (Road 1).", "This is one of many travel assets prepared in case of random encounter confrontations (Road 2).",
    "The Boys encountered a roadblock set up by Olburr Sootfoot and his pack of bandits.", "(UNUSED) This is part of the sewer system in Circos, where a group of Oni Clan fiends have been abducting children.",
    "(UNUSED) A small abondoned port town close to Circos where the legendary pirate captain of the Bonfire Pirates, Drum Takran, was holding up.", "(UNUSED) The entrance to Ahanjoo Clan ruins has become the home to a giant pack of kobolds.",
    "(UNUSED) A remote mansion north of Circos where an illegal auction of Druid children was taking place (Floor 1).", "(UNUSED) A remote mansion north of Circos where an illegal auction of Druid children was taking place (Floor 2).",
    "(UNUSED) Bullder Ross, the traveling alchemist from Barronia that the party met, was in need of a specific mushroom from these crab infested caves.", "(UNUSED) The deeper part of the crab cave system where sea-worshipping cultists were preparing a sacrifice.",
    "This is the shipwreck where the party did battle against the Plaguebringers alongside Emiko Fireforge. Here they found the cursed sword that would be Hack Sparrow's downfall.", "(UNUSED) A rice-field village being attacked by a group of summoned demons.", 
    "(UNUSED) At the toll house the party stopped at, the Enya Clan would offer coin in exchange for helping them steal back the food taken from them by the crown.", "(UNUSED) If the party decided to work for the Oni Clan in Barronia, their first job would have been to clear out this bar under the control of the Petty Pistol Possy.",
    "(UNUSED) If the party decided to work for the Humming Oath in Barronia, their first job would have been to intercept this weapons trade between the Red Raven Pirates and the Oni Clan.", "This swamp is where the party followed a group of witches impersonating Lady Myrathel to lure courtisans to their demise.",
    "This is the part of the Barronia sewer system where the party found the body of Emmo Twoman's brother. Deeper within is the hideout of the Humming Oath faction.", "(UNUSED) Another part of Barronia's sewer system, this being directly underneath the Grand Barrett Palace. This is how the Humming Oath had access to the festivities within.",
    "These are the costal ruins where the party ambushed pirate hunters set to attack the Red Raven Pirates.", "This is one of the many ballrooms in the Grand Barrett Palace where the party witnessed a three-way skirmish between the big players of the city.", 
    "(UNUSED) These are the ancient ruins the party found directions for on a silver, Druidic disk. It is an old temple to one of the reincarnated prophets, Cercie the Bountiful."
]

const listSizeMaps = imageMapArray.length;
let currentIndex = 0;
let sentence = mapSentences[currentIndex];

document.getElementById('myImage').src = imageMapArray[currentIndex];
document.getElementById("mapDescription").textContent = sentence;

function nextImage(){
    if (currentIndex + 1 == listSizeMaps){
        currentIndex = 0;
        myImage.src = imageMapArray[currentIndex];
        sentence = mapSentences[currentIndex];
        document.getElementById("mapDescription").textContent = sentence; 

    }
    else {
        currentIndex++;
        myImage.src = imageMapArray[currentIndex];
        sentence = mapSentences[currentIndex]; 
        document.getElementById("mapDescription").textContent = sentence;
    }
    
}

function prevImage(){
    if (currentIndex == 0) {
        currentIndex = listSizeMaps - 1;
        myImage.src = imageMapArray[currentIndex];
        sentence = mapSentences[currentIndex];
        document.getElementById("mapDescription").textContent = sentence; 
    }
    else {
        currentIndex--; 
        myImage.src = imageMapArray[currentIndex];
        sentence = mapSentences[currentIndex];
        document.getElementById("mapDescription").textContent = sentence;
    }

}

function mapGridClick (num){
    currentIndex = num;
    myImage.src = imageMapArray[currentIndex];
    sentence = mapSentences[currentIndex];
    document.getElementById("mapDescription").textContent = sentence;
}

// OTHER ART SECTION //

const imageArtArray = ["images/misc_art/IMG_1054.PNG", "images/misc_art/IMG_1053.PNG", "images/misc_art/IMG_1052.PNG", "images/misc_art/IMG_1051.PNG", "images/misc_art/IMG_1050.PNG"]

const artSentences = ["This hunk of a fairy is Aungus McLeoud (played by Declan Riordan)", "Mordos", "Timble", "Zellicek", "Veyron"]

const listSizeArt = imageArtArray.length;
let currentArt = 0;
let sentenceB = artSentences[currentArt];

document.getElementById('myArt').src = imageArtArray[currentArt];
document.getElementById("artDescription").textContent = sentenceB;

function nextArtImage(){
    if (currentArt + 1 == listSizeArt){
        currentArt = 0;
        myArt.src = imageArtArray[currentArt];
        sentenceB = artSentences[currentArt];
        document.getElementById("artDescription").textContent = sentenceB; 

    }
    else {
        currentArt++;
        myArt.src = imageArtArray[currentArt];
        sentenceB = artSentences[currentArt];
        document.getElementById("artDescription").textContent = sentenceB;
    }
    
}

function prevArtImage(){
    if (currentArt == 0) {
        currentArt = listSizeArt - 1;
        myArt.src = imageArtArray[currentArt];
        sentenceB = artSentences[currentArt];
        document.getElementById("artDescription").textContent = sentenceB; 
    }
    
    else {
        currentArt--; 
        myArt.src = imageArtArray[currentArt];
        sentenceB = artSentences[currentArt];
        document.getElementById("artDescription").textContent = sentenceB;
    }

}

//TAB BUTTONS//
function sessionPage() { 
    window.location.href = "recaps.html";
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