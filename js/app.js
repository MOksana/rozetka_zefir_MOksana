var favouriteProducts = [];

//отримуємо раніше збережені у браузері обрані продукти
if (window.localStorage.getItem('product')) {
	favouriteProducts = window.localStorage.getItem('product');
	favouriteProducts = favouriteProducts.split(',');
}
updateFavouritesCounter();
checkIfFavourites();
function checkIfFavourites() {
	//Запускаємо функцію для кожної кнопки при завантаженні сторінки
	$('button.add-to-favourites').each(function() {
		var product_id = $(this).attr('data-id');

// перевіряємо чи айді товару є у списку обраних
if (favouriteProducts.includes(product_id) == true) {
	$(this).addClass('in-favourites');
}
});
}


$(document).on ('click','button.add-to-favourites',function(){
	//отримаємо ID  продукту, який додаємо в обрані
	var product_id = $(this).attr('data-id');


// отртимуємо поточну кількість обраних
	//var currentCount = Number($('#favourites span').html()); 

	if (favouriteProducts.includes(product_id) == true){
	// прибираємо зі списку обраних 
	// визначаємо позицію елемента у масиві
	var index = favouriteProducts.indexOf(product_id);

//приховуємо залите серце
$(this).removeClass('in-favourites');

// Видаляємо айді продукту з масив за індексом
favouriteProducts.splice(index, 1);
// Віднімаємо одиницю від лічильника обраних
  	//currentCount--;

} else {
	//Додаємо айді товару в масив (список) обраних
	favouriteProducts.push(product_id);

	// Показуємо залите серце
	$(this).addClass('in-favourites');

//додаємо одиницю до лічильника обраних
//currentCount = currentCount + 1;
//currentCount++;
}
// Зберігаємо список обраних у браузері
	window.localStorage.setItem('product', favouriteProducts);
	
	updateFavouritesCounter();


    //Pure JS
	// document.getElementById('favourites').innerHTML = '<span>'+currentCount+'</span>';
	
	console.log(favouriteProducts);
});

function updateFavouritesCounter(){
	//ОНОВИТИ ДАНІ В HTML ЛІЧИЛЬНИКА
	$('#favourites span').html(favouriteProducts.length);
	if (favouriteProducts.lengt == 0){
		//сховати лічильник
		$('#favourites span').addClass('empty');
	} else {
		$('#favourites span').removeClass('empty');
	}

}



// Home banner slider
$(document).ready(function(){
	var sliderOptions = {
		prevArrow:'<div class="prev-button"><svg><use href="#right-chevron"></use></svg></div>',
		nextArrow:'<div class="next-button"><svg><use href="#right-chevron"></use></svg></div>'
	};

	$('.home__banner-slider').slick(sliderOptions);
});


			//$(document).on('ready', function(){
			//alert('jQuery is ok');	
			//});

			//$('.header__search form button').on('click',function(){
				//var searchTerm = $('.header__search form input').val();
				//alert(searchTerm);
			//});

			$(document).on('click', '.header__search form button',function(){
				var searchTerm = $('.header__search form input').val();
				alert(searchTerm);
			});

			$(document).on('click', '.header__menu-toggle', function(){
             //$(this).addClass('opened');
             //if($(this).hasClass('opened')){
             	//$(this).removeClass('opened'); 
            // } else {
             	//$(this).addClass('opened');
             //}

            // змінюємо клас для кнопки
            $(this).toggleClass('opened');

            // змінюємо клас для меню
            $('.slide-menu').toggleClass('opened');
        });


			// var firstName = "Оксана";
			// var lastName = "Мушинська";
			// var fullName = firstName+' '+lastName;

			var myData ={
				firstName:'Оксана',
				lastName:'Мушинська',
				age:35
			}

			//function fullNameFunction(first,last){
				//var fullName = first+' '+last;
				//return fullName;
			//}
			
			//var myFullName = fullNameFunction(myData.firstName, myData.lastName);

            //alert(myFullName);


            function createProductHtml(product) {
            	var html = `<li class="product-card home__product-list-card">
            	<div class="thumb">
            	<button data-id="${product.id}"class="add-to-favourites">
            	<svg>
            	<use href="#heart"></use>
            	</svg> <svg class='filled'>
            	<use href="#heart_filled"></use>
            	</svg> 
            	</button>

            	<a href="#">
            	<img src="${product.img}">
            	</a>

            	</div>
            	<a href="#" class="title">
            	${product.title}
            	</a>
            	<div class="old-price">
            	${product.price * 1.2} 
            	</div>
            	<div class="price">
            	${product.price}
            	</div>
            	<div class="availablity">
            	немає в наявності
            	</div>
            	</li>>`;
            	return html;
            }




            function getProducts(){

            	fetch('https://fakestoreapi.com/products')
            	.then((response)=>{
            		return response.json();
            	})
            	.then((products)=>{
            		var allHtml = '';
            		var count = 0;
            		products.forEach((product)=>{
            			if(count < 4){
            				var html = createProductHtml(product);
            				allHtml = allHtml + html;
            				count++;
            			}
            		});
            		$('.home__product-list ul').prepend(allHtml);
            		checkIfFavourites();
            	})
            	.catch((error)=> {
            		console.log(error);
            	})

            }
            getProducts();