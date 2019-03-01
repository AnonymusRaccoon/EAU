
radius = 288;

var carousel =  document.querySelector(".carousel"); 
var selectedIndex = 0; 

var nextButton = document.querySelector('.next');

nextButton.addEventListener('click', function() {selectedIndex++;rotateCarousel();});
console.warn(carousel);
function rotateCarousel()
{
    var angle = 40 * selectedIndex * -1;
    carousel.style.transform =  + "rotateY" + '(' + angle + 'deg)';
}