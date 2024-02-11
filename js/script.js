document.getElementById("yes").addEventListener("click", function () {
    document.getElementById("dynamicImage").src = "images/sad_bunny.gif";
    document.getElementById("caption").innerHTML = "Hasta la vista Baby!!!!!";
});
let previousImageScr = "images/main_bunny.gif";
function changeImage(isMouseOver) {
    const dynamicImage = document.getElementById("dynamicImage");
    if (isMouseOver) {
        previousImageScr = dynamicImage.src;
        dynamicImage.src = "images/happy_bunny.gif";
        timeoutId = setTimeout(() => 5000);
    } else {
        dynamicImage.src = previousImageScr;
    }
};
var noButton = document.getElementById("noButton");
function moveButtonOnHover(isHovered) {
    if (isHovered) {
        var randomLeft= Math.floor(Math.random() * 500);
        var randomTop= Math.floor(Math.random() * 100);
        noButton.style.transform = `translate(${randomLeft}px, ${randomTop}px)`;
    } 
}
function handleHover(isHovered) {
    changeImage(isHovered);
    moveButtonOnHover(isHovered);
  }