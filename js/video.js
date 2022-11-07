var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false

});
video = document.querySelector("#player1")

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("The current volume is " + video.volume)

});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate*=.90
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate*=1.10
	console.log("Speed is", video.playbackRate)
});

document.querySelector('#skip').addEventListener("click", function() {
	console.log("The current location of the video is", video.currentTime)
	console.log("Skip Ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0 
	}
	console.log("The current location of the video is", video.currentTime)
});
document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"		
	}
});
document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%"
});
document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});
document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});

