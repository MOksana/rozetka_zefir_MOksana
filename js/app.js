$(document).ready(function(){
			var sliderOptions = {
				prevArrow:'<div class="prev-button"><svg><use href="#right-chevron"></use></svg></div>',
				nextArrow:'<div class="next-button"><svg><use href="#right-chevron"></use></svg></div>',
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

			$(document).on('click','.header__menu-toggle',function(){
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
        })


			// var firstName = "Оксана";
			// var lastName = "Мушинська";
			// var fullName = firstName+' '+lastName;

			//var myData ={
				//firstName:'Оксана',
				//lastName:'Мушинська',
				//age:35
			//}

			//function fullNameFunction(first,last){
				//var fullName = first+' '+last;
				//return fullName;
			//}
			
			//var myFullName = fullNameFunction(myData.firstName, myData.lastName);

            //alert(myFullName);