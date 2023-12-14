document.addEventListener('DOMContentLoaded', function() {
  const bigImage = document.querySelector('.big-image img');
  const smallImages = document.querySelectorAll('.small-images img');
  
  smallImages.forEach(function(image) {
    image.addEventListener('click', function() {
      const currentImageSrc = bigImage.src;
      bigImage.src = image.src;
      image.src = currentImageSrc;
    });
  });
});
