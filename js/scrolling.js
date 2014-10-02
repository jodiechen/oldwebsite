$(window).bind('scroll',function(e){
	parallaxScroll();
});
/*$('body').css('background-image', 'url(../images/backgrounds/header-top.jpg)');*/
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#hmm').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg1').css('top',-scrolled + 'px');
	$('#parallax-bg1').css('left',-(((scrolled-500)*.25))+'px');
	$('#parallax-bg2').css('top',-scrolled + 'px');
	$('#parallax-bg2').css('left',(((scrolled-500)*.5))+'px');
}
var offset = 75;
$('nav li a').click(function(event) {
	event.preventDefault();
	$($(this).attr('href'))[0].scrollIntoView();
	scrollBy(0, -offset);
});
function makeActive(element) {
	var elements = document.getElementById('nav').getElementsByTagName('a');
	for (var i = 0; i < elements.length; i++) {
		elements[i].className = 'a'
	}
	document.getElementById(element).className='focus';
}
$(document).ready ( function() {
	$(window).resize(function() {
		var cw = $('.picture').width();
		$('.picture').css({'height':cw+'px'});
		var width = document.body.clientWidth;
		var height = document.body.clientHeight;
		if (width < 870) {
			$('#about').height(800);
		}
		else {
			$('#about').height(500);
		}
    }).resize();
	var scrolled = $(window).scrollTop();
	var homeHeight = document.getElementById('home').clientHeight;
	var aboutHeight = document.getElementById('about').clientHeight;
	if (scrolled > homeHeight/2 && scrolled < homeHeight + aboutHeight/2) {
		$('#parallax-bg1').fadeIn('slow');
		$('#parallax-bg2').fadeIn('slow');
	}
	else {
		$('#parallax-bg1').fadeOut('slow');
		$('#parallax-bg2').fadeOut('slow');
	}
});

$(document).scroll( function () {
	var scrolled = $(window).scrollTop();
	var homeHeight = document.getElementById('home').clientHeight;
	var aboutHeight = document.getElementById('about').clientHeight;
	var artHeight = document.getElementById('art').clientHeight;
	$('#hmm').css('opacity', 1-(scrolled/200.));
	$('arrow').css('opacity', scrolled/200.);
	if (scrolled > homeHeight){
		$('#nav').addClass('fixed').css('top','0').next().css('padding-top','70px');
		$('#nav').addClass('shadow').css('top','0').next().css('padding-top','70px');
		$('#arrow-up').css('border-bottom','border-bottom: 10px solid #607860');
	} else {
		$('#nav').removeClass('fixed').next().css('padding-top','0');
		$('#nav').removeClass('shadow').css('top','0').next().css('padding-top','0');
	}
	if (scrolled > homeHeight/2 && scrolled < homeHeight + aboutHeight/2) {
		$('#parallax-bg1').fadeIn('slow');
		$('#parallax-bg2').fadeIn('slow');
	}
	else {
		$('#parallax-bg1').fadeOut('slow');
		$('#parallax-bg2').fadeOut('slow');
	}
	if (scrolled < homeHeight*3/4) {
		makeActive('linkHome');
	}
	else if (scrolled < homeHeight+aboutHeight*2/3) {
		makeActive('linkAbout');
	}
	else if (scrolled < homeHeight+aboutHeight+artHeight*2/3) {
		makeActive('linkArt');
	}
	else {
		makeActive('linkContact');
	}
});