
window.addEventListener('mousedown', function(e){
	const audio = document.querySelectorAll('audio');
	audio.forEach(item => {
		if (e.target.getAttribute("data-key") == item.getAttribute("data-key")) {
			item.currentTime = 0;
			item.play();
		}
	});
	
	if (e.target.getAttribute('class') == 'key black no-display') {
		return;
	} 
	e.target.classList.add('key-press');

})

const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', removetransition));

function removetransition(){
	this.classList.remove('key-press');
}
