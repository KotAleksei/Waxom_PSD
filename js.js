const header_background = document.querySelector('.header-background'),
	  prev = document.querySelector('.header__slider--arrow-left'),
	  next = document.querySelector('.header__slider--arrow-right'),
	  length_of_image = header_background.children.length;

let num = 0;
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function prevSlide() {
	num += 100;
	if(num > 0)
		num = -(length_of_image-1)*100;
	header_background.style.left = num + '%';
}

function nextSlide() {
	num -= 100;
	if( num <= -length_of_image*100)
		num = 0;
	header_background.style.left = num + '%';
}