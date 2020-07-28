var allBlocksVisible = false;

$(function() {
	var navbar = $("#navbar");
	$(window).scroll(function(){
		if (window.pageYOffset > 5)
		{
  			if(!navbar.hasClass('is-scrolled'))
  				navbar.addClass('is-scrolled');
		}
		else
			navbar.removeClass('is-scrolled');

		
		if(!allBlocksVisible)
			checkInfoBlocks();
		
	});
})

function checkInfoBlocks()
{
	var infoBar1 = $('#infoBar1');
	var infoBar2 = $('#infoBar2');
	var infoBar3 = $('#infoBar3');
	var infoBar4 = $('#infoBar4');

	if(isElementInView(infoBar1) && !infoBar1.hasClass('visible'))
			setDataAsVisible(infoBar1);
	if(isElementInView(infoBar2) && !infoBar2.hasClass('visible'))
			setDataAsVisible(infoBar2);
	if(isElementInView(infoBar3) && !infoBar3.hasClass('visible'))
			setDataAsVisible(infoBar3);
	if(isElementInView(infoBar4) && !infoBar4.hasClass('visible'))
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

	console.log('addedClass');



	elem.addClass('visible');
}