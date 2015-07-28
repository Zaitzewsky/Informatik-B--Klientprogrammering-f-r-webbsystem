var Image_slide = new Array(
    "BF4S.png", 
    "CoDGS.png", 
    "MirsEdge2S.png");
var Img_Length  = Image_slide.length;
var Img_current = 0

function slide() {
    if(Img_current >= Img_Length) {
        Img_current = 0;
    }
    document.slideshow.src = Image_slide[Img_current];
    Img_current++;
}
function auto(){
    window.setInterval(slide, 2500);
}
window.onload=auto;