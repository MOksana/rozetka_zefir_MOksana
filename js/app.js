var favouriteProducts = [];

//Отримуємо раніше збережені в браузері обрані продукти
if(window.localStorage.getItem('product')){
	favouriteProducts = window.localStorage.getItem('product');
	favouriteProducts = favouriteProducts.split(',');
}
updateFavouritesCounter();
checkIfFavourites();
function checkIfFavourites(){
	//Запускаємо функцію для кожної кнопки при завнатаженні сторінки
$( "button.add-to-favourites" ).each(function() {
	var product_id = $(this).attr('data-id');

	//Перевіряємо чи айді товару є в списку обраних
	if(favouriteProducts.includes(product_id) == true){
		$(this).addClass('in-favourites');
	}
});

}


$(document).on('click', 'button.add-to-favourites',function(){
	//Отримуємо ID продукту, який додаємо в обрані
	var product_id = $(this).attr('data-id');

	//Отримуємо поточну кількість обраних
	//var currentCount = Number($('#favourites span').html());


	if(favouriteProducts.includes(product_id) == true){
		//Прибираємо зі списку обраних
		//Визначаємо позицію елементу в масиві
		var index = favouriteProducts.indexOf(product_id);

		//Приховуємо залите серце залите серце
		$(this).removeClass('in-favourites');

		//Видаляємо айді продукту з масив за індексом
		favouriteProducts.splice(index, 1);
		//Віднімаємо одиницю від лічильника обраних
		//currentCount--;

	} else {
		//Додаємо айді товару в масив (список) обраних
		favouriteProducts.push(product_id);

		//Показуємо залите серце
		$(this).addClass('in-favourites');

		//Додаємо одиницю до лічильника обраних
		//currentCount = currentCount + 1;
		//currentCount++;
	} 

	//Зберігаємо список обраних в браузері
	window.localStorage.setItem('product', favouriteProducts);

	updateFavouritesCounter();
	

	//Pure JS
	// document.getElementById('favourites').innerHTML = '<span>'+currentCount+'</span>';
	
	console.log(favouriteProducts);
});

function updateFavouritesCounter(){
	//Оновити дані в HTML лічильника
	$('#favourites span').html(favouriteProducts.length);
	if(favouriteProducts.length == 0){
		//Сховати лічильник
		$('#favourites span').addClass('empty');
	} else {
		//Показати лічильник
		$('#favourites span').removeClass('empty');
	}
}





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


	



