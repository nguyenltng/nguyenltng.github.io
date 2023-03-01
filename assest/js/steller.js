/*!
=========================================================
* Landing page
=========================================================
*/

$(document).ready(function(){
	
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
	$(".hire-me").on('click', function(event) {
    	window.open('tel:0374370101');
		return;
    });


});