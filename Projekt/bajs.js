var Image_slide = new Array(
    "BF4S.png", 
    "CoDGS.png", 
    "MirsEdge2S.png");

var Image_curr = 0;

function slide(){
	if(Image_curr >= Image_slide.length){
		Image_curr = 0;
	}
	document.getElementById("bild").src = Image_slide[Image_curr];
	Image_curr++;
}

function auto(){
	setInterval(slide, 100);
}

window.onload=auto;