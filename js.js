
window.addEventListener('mousedown', function(e){
	const audio = document.querySelectorAll('audio');
	audio.forEach(item => {
		if (e.target.getAttribute("data-key") == item.getAttribute("data-key")) {
			item.currentTime = 0;
			item.play();
		}
	});
})
