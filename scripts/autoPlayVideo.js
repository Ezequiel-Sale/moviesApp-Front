const autoPlayVideo = ()=>{
    let video = document.getElementById("miVideo");
    
            video.addEventListener("ended", function() {
                this.currentTime = 0;
                this.play();
            });
}
autoPlayVideo();

module.exports = autoPlayVideo