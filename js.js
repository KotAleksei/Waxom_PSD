const header_background = document.querySelector('.header-background'),
	  prev = document.querySelector('.header__slider--arrow-left'),
	  next = document.querySelector('.header__slider--arrow-right'),
	  length_of_image = header_background.children.length,
	  items = document.querySelectorAll('.header__slider-items img');

let num = 0;
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function prevSlide() {
	items[-num/100].src = 'img/header_not_active--slide.png'; // previouse item should unactivated
	num += 100;
	if(num > 0){
		num = -(length_of_image-1)*100;
		header_background.style.transition = '0s';
	}
	else 
		header_background.style.transition = '1s';
	items[-num/100].src = 'img/header_active--slide.png'; // current actived
	header_background.style.left = num + '%';
}

function nextSlide() {
	items[-num/100].src = 'img/header_not_active--slide.png'; // previouse item should unactivated
	num -= 100;
	if( num <= -length_of_image*100){
		num = 0;
		header_background.style.transition = '0s';
	}
	else 
		header_background.style.transition = '1s';
	items[-num/100].src = 'img/header_active--slide.png'; // current actived
	header_background.style.left = num + '%';

}