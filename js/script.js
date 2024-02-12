document.getElementById("yes").addEventListener("click", function () {
    document.getElementById("dynamicImage").src = "images/sad_bunny.gif";
    document.getElementById("caption").innerHTML = "Hasta la vista Baby!!!!!";
    var noButton = document.getElementById("noButton");
    var yesButton = document.getElementById("yes");
    noButton.style.display = "none";
    yesButton.style.display = "none";
});
let previousImageScr = "images/main_bunny.gif";
function changeImage(isMouseOver) {
    const dynamicImage = document.getElementById("dynamicImage");
    if (isMouseOver) {
        previousImageScr = dynamicImage.src;
        dynamicImage.src = "images/happy_bunny.gif";
    } /*else {
        dynamicImage.src = previousImageScr;
    }*/
};
var noButton = document.getElementById("noButton");
function moveButtonOnHover(isHovered) {
    if (isHovered) {
        var randomLeft = Math.floor(Math.random() * 500);
        var randomTop = Math.floor(Math.random() * 100);
        noButton.style.transform = `translate(${randomLeft}px, ${randomTop}px)`;
    }
}
function handleHover(isHovered) {
    changeImage(isHovered);
    moveButtonOnHover(isHovered);
}