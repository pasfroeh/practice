let dog = document.getElementById("dog");
let cat = document.getElementById("cat");
let otter = document.getElementById("otter");
let bear = document.getElementById("bear");
let thumbnailDog = document.getElementById("thumbnailDog");
let thumbnailCat = document.getElementById("thumbnailCat");
let thumbnailOtter = document.getElementById("thumbnailOtter");
let thumbnailBear = document.getElementById("thumbnailBear");
let body = document.getElementById("body");
let mood = document.getElementById("mood");

console.log("Show ", dog);

/*
document.body.style.backgroundImage = "url('cute_dog.jpg')";
document.body.style.backgroundImage = "dog";
document.body.style.backgroundSize = "100% auto";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
*/
console.log(body.style);

function removeHighlight() {
    thumbnailDog.classList.remove("highlight");
    thumbnailCat.classList.remove("highlight");
    thumbnailOtter.classList.remove("highlight");
    thumbnailBear.classList.remove("highlight");
}

function clickThumbnailDog() {
    body.style.backgroundImage = 'url("cute_dog.jpg")';
    mood.textContent = "Happy";
    //thumbnailDog.style.border = "1px solid black";
    //thumbnailDog.style.boxShadow = "0 0 8px";
    removeHighlight();
    thumbnailDog.classList.add("highlight");
}
thumbnailDog.onclick= clickThumbnailDog;

function clickThumbnailCat() {
    body.style.backgroundImage = 'url("funny_kitten.jpg")';
    mood.textContent = "Cozy";
    removeHighlight();
    thumbnailCat.classList.add("highlight");
}
thumbnailCat.onclick= clickThumbnailCat;

function clickThumbnailOtter() {
    body.style.backgroundImage = 'url("funny_otter.jpg")';
    mood.textContent = "Silly";
    removeHighlight();
    thumbnailOtter.classList.add("highlight");
}
thumbnailOtter.onclick= clickThumbnailOtter;

function clickThumbnailBear() {
    body.style.backgroundImage = 'url("polar_bear.png")';
    mood.textContent = "Sleepy";
    removeHighlight();
    thumbnailBear.classList.add("highlight");
}
thumbnailBear.onclick= clickThumbnailBear;