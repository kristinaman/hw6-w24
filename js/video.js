var video;

// Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false; 
});

// Play the video and update the volume information.  
const updateVolume = () => {
	const volume = document.querySelector('#volume');
	volume.innerHTML = `${video.volume * 100}%`;
};

document.querySelector('#play').addEventListener('click', () => {
	video.play();
	console.log('Play video');
	updateVolume();
});

// Pause the video.
document.querySelector('#pause').addEventListener('click', () => {
	video.pause();
	console.log('Pause video');
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 
document.querySelector('#slower').addEventListener('click', () => {
	video.playbackRate -= 0.1; // 10% slow down
	console.log('Slow down video', `Speed is ${video.playbackRate}`);
});


// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change 
// it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three 
// times you should be within 5 digits of 100% again.
document.querySelector('#faster').addEventListener('click', () => {
	video.playbackRate += 0.1;
	console.log('Speed up video', `Speed is ${video.playbackRate}`);
});


// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.
// Log the current location of the video.
document.querySelector('#skip').addEventListener('click', () => {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log('Skip to end of video');
	} else {
		video.currentTime += 10;
		console.log('Skip ahead 10 seconds');
	}
	console.log(`Video current time is ${video.currentTime}`);
});


// Mute/unmute the video and update the text in the button.
document.querySelector('#mute').addEventListener('click', () => {
	video.muted = !video.muted;
	console.log(video.muted ? 'Mute' : 'Unmute');
	document.querySelector('#mute').innerHTML = video.muted ? 'Unmute' : 'Mute';
});



// Change the volume based on the slider and update the volume information.
document.querySelector('#slider').addEventListener('change', function() {
	video.volume = this.value / 100;
	updateVolume();
	console.log(`The current volume is ${video.volume}`);
});


// Utilize the existing oldSchool class on the video element
document.querySelector('#vintage').addEventListener('click', () => video.classList.add('oldSchool'));


// Remove the oldSchool class from the video.
document.querySelector('#orig').addEventListener('click', () => video.classList.remove('oldSchool'));
