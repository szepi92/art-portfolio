/*
 * This file was added by Deon and Reka on Apr 22, 2014.
 * It modifies the caption/subtitles for the galleria slide show.
*/

// This is called by Galleria whenever a new image is about to be swapped in
// We hide the caption for now (by putting it at some other place).
Galleria.on('loadstart', function(e) {
	var infoText = $(".galleria-info");
	infoText.css({top: "9000px"});
});


// This is called by Galleria once the image is fully loaded / swapped in
// Modify the caption size / position to fit the image. And fade in.
Galleria.on('image', function(e) {
	var img = e.imageTarget;
	var infoText = $(".galleria-info");
	var margins = 10;
	var captionHeight = 28;	// modify this if your caption will have different height
	infoText.css({
		left: ""+(img.offsetLeft+margins)+"px",
		width: ""+img.width+"px",
		top: ""+(img.offsetTop+img.height+margins-captionHeight)+"px",
		opacity: "0"
	});
	infoText.animate({opacity:"1"}, 200);
});