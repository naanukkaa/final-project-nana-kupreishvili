$(document).ready(function(){
  $('.picsrow').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
  });
});

$('.your-element').on('swipe', function(event, slick, direction){
  console.log(direction);
});

const cards = document.querySelectorAll('.picsrow img');
cards.forEach(card => {
  card.style.margin = '0 20px';
});

const images = document.querySelectorAll('.picsrow img');

images.forEach(img => {
  img.style.height = '300px';
  img.style.objectFit = 'cover';
});

function resizeImages() {
  const images = document.querySelectorAll('.picsrow img');
  const width = window.innerWidth;

  images.forEach(img => {
    if (width <= 576) {
        img.style.height = '150px';
        img.style.objectFit = 'cover';
    } else if (width <= 991) {
        img.style.height = '200px';
        img.style.objectFit = 'cover';
    } else {
        img.style.height = '300px';
        img.style.objectFit = 'cover';
    }
  });
}
resizeImages();

window.addEventListener('resize', resizeImages);
