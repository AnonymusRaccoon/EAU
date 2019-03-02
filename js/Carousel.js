
radius = 288;

var carousel =  document.querySelector(".carousel"); 
var selectedIndex = 0; 

var totalcellcount = 9;
var angle=0;
var nextButton = document.querySelector('.next');


function rotateCarousel(target)
{  
    console.log("selectedindex "+selectedIndex);
    console.log("target "+target);
    angle = (selectedIndex-target)*40 +angle;
   
    console.log("angle "+ angle);
    carousel.style.transform = "translateZ(-288px) rotateY" + '(' + angle + 'deg)';
    
    selectedIndex = target;
}

function Setupeventlisterner()
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
