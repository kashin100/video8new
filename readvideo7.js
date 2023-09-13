player.ready(function(){
		 var show_on_start = true;
		 var close_delay = 9;
		 var player_ = this;
		 var parent = this.el().parentNode;
		 console.log(parent.id);
		 var closeBtn = parent.querySelector('.over-close');
		 var overlay = parent.querySelector('.div-over');
		 var timer;
		 function delay() {
			clearTimeout(timer);
			if(parseInt(close_delay)>0) {
				closeBtn.innerHTML=close_delay;
				var timer =window.setTimeout(delay, 1000);
				close_delay--;
			} else {
				closeBtn.innerHTML='';
				closeBtn.className='over-close';
			}
		 }
		 function showOverlay() {
			console.log('delay:'+close_delay);
			if(parseInt(close_delay)>0) {
				delay();
			} else {
				closeBtn.className = 'over-close';
			}
			overlay.style.display='block';
		 }

		 closeBtn.addEventListener('click',function(e) {
			overlay.style.display='none';
			player_.play();
		 }, false);

 		 this.on("pause", function(){
			if (!this.seeking() && this.paused()) {
				showOverlay();
			}
		 });
		 this.on('play', function(e) {
			overlay.style.display='none';
		 });
		 if(show_on_start) {
		   // Show overlay on start
			this.pause(); showOverlay();
		 } else {
			overlay.style.display='none';
		 }
	});