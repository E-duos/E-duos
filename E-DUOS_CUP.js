const videosWrapper = document.querySelector('.videos-wrapper');
const videos = document.querySelector('.videos');

videosWrapper.addEventListener('mouseover', () => {
    videos.style.animationPlayState = 'paused';
});

videosWrapper.addEventListener('mouseout', () => {
    videos.style.animationPlayState = 'running';
});
