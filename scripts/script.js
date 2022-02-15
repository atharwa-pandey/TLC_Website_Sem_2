$(document).ready(function(){
	$('.hamburger-shell').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});
	$('.bg-cover').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	})
	// navbar closes on scroll
	$(window).scroll(function(){
		$('#menu').slideUp(300);
		$('.top').removeClass('rotate');
		$('.middle').removeClass('rotate-back');
		$('.menu-name').removeClass('bump');
		$('.bg-cover').removeClass('reveal');
	})
});

// scroll reveal
window.sr = ScrollReveal();
  sr.reveal('#about' , {
  duration: 2000,
  origin:'bottom',
  distance: '50px',
  // roll after scroll
  afterReveal: function() {
	sr.reveal('#show-about-list', {
		afterReveal: function() {
			$('#myList').removeClass('hide-about-list');
			$('#myList li').addClass('start');
			console.log("Displyed rolldown animation");
			$('.start').each(function () {
				var delay = ($(this).index() / 4) + 's';
				$(this).css({
				webkitAnimationDelay: delay,
				mozAnimationDelay: delay,
				animationDelay: delay
				});
			});
		}
	});
  }
});

window.sr = ScrollReveal();
  sr.reveal('.landing-page-text' , {
  duration: 2000,
  origin:'bottom',
  distance: '100px'
});

window.sr = ScrollReveal();
  sr.reveal('.quote-container' , {
  duration: 2000,
  origin:'bottom',
  distance: '50px'
});