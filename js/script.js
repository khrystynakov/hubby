document.getElementById("yes").addEventListener("click", function () {
    document.getElementById("dynamicImage"). src="images/sad_bunny.gif";
    document.getElementById("caption"). innerHTML="Hasta la vista Baby!!!!!";
});
let previousImageScr="images/main_bunny.gif";
function changeImage (isHovered){
    const dynamicImage=document.getElementById("dynamicImage");
    if (isHovered){
        previousImageScr=dynamicImage.src;
        dynamicImage.src="images/happy_bunny.gif";
    } else {
        dynamicImage.src=previousImageScr;
    }
};
/*function moveButton(){
    const button=document.getElementById("no");
    const container=dicument.getElementById("buttonContainer");
    const containerRect=container.getBoudingClientRect();
    const randomX=Math.floor(Math.random()*(containerRect.width - 50));
    button.style.transform= 'translate(${randomX}px, - 40px)';
}*/
let hoverCount = 0;
function incrementHoverCount() {
    hoverCount++;
    document.getElementById("hoverCount").innerText = hoverCount;
  }