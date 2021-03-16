//main.js

let vol = 100;
let currHorn = "./assets/media/audio/air-horn.mp3";

let sImage = document.getElementById('sound-image');
let vNum = document.getElementById('volume-number');
let vSlide = document.getElementById('volume-slider');
let vImage = document.getElementById('volume-image');
let vSound = document.getElementById('horn-sound');
let aHorn = document.getElementById('radio-air-horn');
let cHorn = document.getElementById('radio-car-horn');
let pHorn = document.getElementById('radio-party-horn');

let button = document.getElementById('honk-btn');
button.type = "button";
button.addEventListener("click", playSound);

vNum.addEventListener("input", updateNum);
vSlide.addEventListener("input", updateSlide);

aHorn.addEventListener("click", updateAir);
cHorn.addEventListener("click", updateCar);
pHorn.addEventListener("click", updateParty);

function updateNum() {
    vSlide.value = vNum.value;
    vol = vNum.value;
    vCheck();  
}

function updateSlide() {
    vNum.value = vSlide.value;
    vol = vSlide.value;
    vCheck();    
}

function vCheck() {
    
    if (vol >= 67) {
        vImage.src = "./assets/media/icons/volume-level-3.svg";
        button.disabled = false;
    }

    else if (vol >= 34 && vol <= 66) {
        vImage.src = "./assets/media/icons/volume-level-2.svg";
        button.disabled = false;
    }

    else if (vol >= 1 && vol <= 33) {
        vImage.src = "./assets/media/icons/volume-level-1.svg";
        button.disabled = false;
    }

    else if (vol == 0) {
        vImage.src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true;
    }
}

function updateAir() {
    sImage.src = "./assets/media/images/air-horn.svg";
    currHorn = "./assets/media/audio/air-horn.mp3";

}

function updateCar() {
    sImage.src = "./assets/media/images/car.svg";
    currHorn = "./assets/media/audio/car-horn.mp3";
}

function updateParty() {
    sImage.src = "./assets/media/images/party-horn.svg";
    currHorn = "./assets/media/audio/party-horn.mp3";
}

function playSound() {
    vSound.src = currHorn;
    vSound.volume = vol/100;
    vSound.play();
}