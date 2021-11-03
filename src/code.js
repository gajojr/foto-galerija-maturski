const images = document.querySelectorAll('.images-list>img');

images.forEach(image => {
    image.addEventListener('click', () => {
        // promeni naslov iznad slike
        document.getElementById('current-image-name').textContent = image.src.substring(image.src.lastIndexOf('/') + 1, image.src.indexOf('.jpg'));
        // uzmemo src trenutne slike
        const selectedImageSrc = document.querySelector('.current-image>img').src;
        document.querySelector('.current-image>img').src = image.src.replace('http://localhost/2.foto-galerija/', '');
        image.src = selectedImageSrc.replace('http://localhost/2.foto-galerija/', '');
    });
})