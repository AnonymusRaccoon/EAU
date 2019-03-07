var selectedIndex = 0;
var carousel
var totalcellcount = 9;
var angle = 0;

function setup()
{
    carousel = document.querySelector(".carousel");

    var list = document.getElementsByClassName("carousel__cell");
    for (i = 0; i < list.length; i++)
    {
        list[i].id= i;
        list[i].addEventListener('click', function() 
        {   
            rotateCarousel(event.target.id);
        });      
    };
}

function rotateCarousel(target)
{  
    //console.log("selectedindex "+selectedIndex);
    //console.log("target "+target);
    angle = (selectedIndex-target)*20 +angle;
   
    //console.log("angle "+ angle);
    carousel.style.transform = "translateZ(-880px) rotateY" + '(' + angle + 'deg)';
    
    selectedIndex = target;
}