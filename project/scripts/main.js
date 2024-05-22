const images = document.querySelectorAll('.changing-image');

let currentIndex = Math.floor(Math.random() * images.length);
images[currentIndex].classList.add('active');

function changeImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.remove('active');
    images[nextIndex].classList.add('active');
    currentIndex = nextIndex;
}

setInterval(changeImage, 10000);