$(document).ready(function(){
		var sliderOptions = {
  
  	prevArrow: '<div class="prev-button"> <svg> <use href="#shevron-right"> </use> </svg> </div>',
  	nextArrow: '<div class="next-button"> <svg> <use href="#shevron-right"> </use> </svg> </div>'
  };
  $('.home__content-slider').slick(sliderOptions)
});




$(document).on('click', '.header__search form button', function(){
	var searchTerm = $('.header__search form input').val();
	alert(searchTerm);
});

 $(document).on('click', '.header__menu-toggle', function(){


$(this).toggleClass('opened');

//Змінюєм клас для меню
$('.slide-menu').toggleClass('opened');
})


	



