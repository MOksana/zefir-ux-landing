$('.stat__slider').on('init', function(event,slick){
	var totalSlides = slick.slideCount;

  $('#total_slides').html(totalSlides);
});


$('.stat__slider').on('afterChange', function(event,slick,currentSlide,nextSlide){

	 $('#current_slide').html(currentSlide+1);

});





$(document).ready(function() {
	var sliderOptions = {
		arrows: false
	}
$('.stat__slider').slick(sliderOptions);
});



$('#slider_next').on('click',function(){
	$('.stat__slider').slick('slickNext');
});

$('#slider_prev').on('click',function(){
	$('.stat__slider').slick('slickPrev');
});