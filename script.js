let init = ()=> {
	let after;
	after = document.getElementsByClassName('after');
	for (let i = 0; i < after.length; i++) {
		compare(after[i]);
	}
}

function compare(photo) {
	var photo, slider, width, wys, click = 0;
	width = photo.offsetWidth; 
	high = photo.offsetHeight; 
	photo.style.width = (width/2) + "px"; 

	slider = document.createElement('DIV');
	slider.setAttribute('class','slider'); 
	photo.parentElement.insertBefore(slider, photo); 

	slider.style.top = (high/ 2) - (slider.offsetHeight/2) + "px"; 
	slider.style.left = (width / 2) - (slider.offsetWidth/2) +"px"; 

	slider.addEventListener('mousedown',sliderStart);
	slider.addEventListener('mouseup',sliderStop);

	function sliderStart(e) {
		e.preventDefault(); 
		click = 1;
		window.addEventListener("mousemove", motion); 
	}

	function sliderStop() {
		click = 0; 
	}

	function motion(e) {
		var position;
		if(click==0) return false; 
		position=getCursor(e);
		if(position < 0) position = 0; 
		if(position > width) position = width;
		slide(position);
	}

	function getCursor(e) {
		var a, x = 0;
		e = e || window.event; //jeżeli e jest puste, e ma być window.event
		a = photo.getBoundingClientRect(); //pobierz poziom zdjęcia
		x = e.pageX - a.left; 
		x = x - window.pageXOffset; 
		return x; 
	}

	function slide(x){
		photo.style.width = x + "px"; 
		slider.style.left = photo.offsetWidth - (slider.offsetWidth / 2) + "px";
	}
}
window.addEventListener('load',init,false);