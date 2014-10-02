$().ready(
	function() {
		var animated = true;
		$(document).scroll( function () {
			var scrolled = $(window).scrollTop();
			var surrealEstateHeight = document.getElementById('surreal-estate').clientHeight;
			var padmentumHeight = document.getElementById('padmentum').clientHeight;
			var pilamHeight = document.getElementById('pilam-tv').clientHeight;
			var oldWebHeight = document.getElementById('old-website').clientHeight;
			if (scrolled < surrealEstateHeight) {
				$(".project-link").removeClass('current');
				$("#se").addClass('current');
				animated = true;
			}
			else if (scrolled < surrealEstateHeight + padmentumHeight) {
				$(".project-link").removeClass('current');
				$("#p").addClass('current');
				animated = true;
			}
			else if (scrolled < surrealEstateHeight + padmentumHeight + pilamHeight) {
				$(".project-link").removeClass('current');
				$("#tv").addClass('current');
				if (animated) {
					for (i = 0; i < $(".path").length; i++) {
						animated = false;
						path = $(".path")[i];
						var length = path.getTotalLength();
						// Clear any previous transition
						path.style.transition = path.style.WebkitTransition =
						  'none';
						// Set up the starting positions
						path.style.strokeDasharray = length + ' ' + length;
						path.style.strokeDashoffset = length;
						// Trigger a layout so styles are calculated & the browser
						// picks up the starting position before animating
						path.getBoundingClientRect();
						// Define our transition
						path.style.transition = path.style.WebkitTransition =
						  'stroke-dashoffset 2s ease-in-out';
						// Go!
						path.style.strokeDashoffset = '0';
					}
				}
			}
			else {
				$(".project-link").removeClass('current');
				$("#old").addClass('current');
				animated = true;
			}
		})
	}
)