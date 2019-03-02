var selectedIndex = 0;
var carousel
var totalcellcount = 9;
var angle = 0;

function setup()
{
    carousel = document.querySelector(".carousel");
    var nextButton = document.querySelector('.next');

    nextButton.addEventListener('click', setupEventListener());
}

function rotateCarousel(target)
{  
    console.log("selectedindex "+selectedIndex);
    console.log("target "+target);

    angle = (selectedIndex-target)*40 +angle;
   
    console.log("angle "+ angle);
    carousel.style.transform = "translateZ(-288px) rotateY" + '(' + angle + 'deg)';
    
    selectedIndex = target;
}

function setupEventListener()
{
    list = document.getElementsByClassName("carousel__cell");
    console.log(list);
    for (i = 0; i < list.length; i++)
    {
        list[i].id= i;
        list[i].addEventListener('click', function() 
        {   
            rotateCarousel(event.target.id);
        });      
    };
}
