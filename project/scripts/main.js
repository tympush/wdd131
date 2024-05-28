const imageContainer = document.querySelector('.changing-image-container');

for (let i = 1; i <= 20; i++) {
    const picture = document.createElement('picture');

    const source = document.createElement('source');
    source.srcset = `images/banner${i}.webp`;
    source.media = '(min-width: 960px)';
    source.width = 1920;
    source.height = 500;

    const img = document.createElement('img');
    img.className = 'changing-image';
    img.src = `images/banner${i}-smol.webp`;
    img.alt = `Changing Image ${i}`;
    img.width = 960;
    img.height = 250;
    img.loading = 'lazy';

    picture.appendChild(source);
    picture.appendChild(img);

    imageContainer.appendChild(picture);
}



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