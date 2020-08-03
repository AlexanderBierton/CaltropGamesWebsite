var allBlocksVisible = false;
var parallax = null;
$(function() {
	parallax = new ParallaxItem($("#image1"));
    $(".loading-cover").delay(1800).animate({
        opacity: '0'
    }, { 
        complete: function() {
            $(".loading-cover").hide();
        }
    });
});

window.addEventListener("beforeunload", function(event) { 
	$(".loading-cover").css('display', 'block');
	$(".loading-cover").animate({
		opacity: '1'
	});
});

$(window).scroll(function(){
	var navbar = $("#navbar");
	if (window.pageYOffset > 5)
	{
		if(!navbar.hasClass('is-scrolled'))
			navbar.addClass('is-scrolled');
	}
	else
		navbar.removeClass('is-scrolled');

	
	if(!allBlocksVisible)
		checkInfoBlocks();
	
	//handleBannerImageScroll();
});

function checkInfoBlocks()
{
	var infoBar1 = $('#infoBar1');
	var infoBar2 = $('#infoBar2');
	var infoBar3 = $('#infoBar3');
	var infoBar4 = $('#infoBar4');

	if (infoBar1.hasClass('visible') && infoBar2.hasClass('visible') && infoBar3.hasClass('visible') && infoBar4.hasClass('visible'))
	{
		allBlocksVisible = true;
		return false;
	}

	if (isElementInView(infoBar1) && !infoBar1.hasClass('visible'))
			setDataAsVisible(infoBar1);
	if (isElementInView(infoBar2) && !infoBar2.hasClass('visible'))
			setDataAsVisible(infoBar2);
	if (isElementInView(infoBar3) && !infoBar3.hasClass('visible'))
			setDataAsVisible(infoBar3);
	if (isElementInView(infoBar4) && !infoBar4.hasClass('visible'))
			setDataAsVisible(infoBar4);
}

function isElementInView(elem)
{
	if(elem.length == 0)
		return false;

    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function setDataAsVisible(elem)
{
	if(elem.length == 0 || elem.hasClass('visible'))
			return false;

	elem.addClass('visible');
}

function handleBannerImageScroll() 
{
	/*var coverImage = $('#image1');
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
    coverImage.css('background-position-y', posY + (docViewTop / 4) + 'px');*/
}