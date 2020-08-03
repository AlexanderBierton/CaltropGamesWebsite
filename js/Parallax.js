function ParallaxItem(obj) {
	var $$ = this;
	this.object = obj;
	this.handleScroll();

	$(window).scroll(function(){
		$$.handleScroll();
	});
	$(window).resize(function() {
		$$.handleScroll();
	});
}

ParallaxItem.prototype.handleScroll = function() {
	var coverImage = this.object;
	if (coverImage.length == 0)
		return false; 
	
	var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    
    var imageSrc = coverImage.css('backgroundImage').replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];   
    var image = new Image();
    
    image.src = imageSrc;
    var height = image.height;
    var calcHeight = (height - coverImage.height()) / 2; 

    // aspectRatio = oldWidth / oldHeight
    var aspectRatio = image.width / image.height;
    // newHeight = newWidth / aspectRatio
    var newHeight = Math.round(coverImage.width() / aspectRatio);

    var posY = 0 - (newHeight - coverImage.height()) / 2;
    coverImage.css('background-position-y', posY + (docViewTop / 4) + 'px');
}