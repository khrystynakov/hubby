document.getElementById("yes").addEventListener("click", function () {
    document.getElementById("dynamicImage").src = "images/sad_bunny.gif";
    document.getElementById("caption").innerHTML = "Hasta la vista Baby!!!!!";
});
let previousImageScr = "images/main_bunny.gif";
function changeImage(isHovered) {
    const dynamicImage = document.getElementById("dynamicImage");
    if (isHovered) {
        previousImageScr = dynamicImage.src;
        dynamicImage.src = "images/happy_bunny.gif";
    } else {
        dynamicImage.src = previousImageScr;
    }
};
var noButton = document.getElementById("no");
function changeImage(isMouseOver) {
    if (isMouseOver) {
        var randomLeft = Math.floor(Math.random() * 200);
        var randomTop = Math.floor(Math.random() * 150);
        noButton.style.transform = `translate(${randomLeft}px, ${randomTop}px)`;
    } 
}