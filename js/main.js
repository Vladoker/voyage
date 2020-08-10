$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
		autoplay:false,
		smartSpeed:1000,
		loop:true,
		nav:false,
		dots:false,
		responsive:{
				0:{
						items:1
				},
				600:{
						items:1
				},
				1000:{
						items:1
				}
		}
	})

	var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

});




// календарь
$( function() {
	$( "#date" ).datepicker({dateFormat: "dd-mm-yy"});
} );

$( function() {
	$( "#date_medium" ).datepicker({dateFormat: "dd-mm-yy"});
} );





