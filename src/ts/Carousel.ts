var selectedIndex = 0;
var carousel: any;
var angle = 0;

export function setup()
{
    carousel = document.querySelector(".carousel");

    var list = document.getElementsByClassName("carousel__cell");
    for (var i = 0; i < list.length; i++)
    {
        list[i].id= i.toString();
        list[i].addEventListener("click", () => 
        {
            var ev = event.target as any;
            rotateCarousel(ev.id);
        });      
    };
}

function rotateCarousel(target: number)
{  
    angle = (selectedIndex - target) * 20 + angle;
    carousel.style.transform = "translateZ(-880px) rotateY(" + angle + "deg)";
    
    selectedIndex = target;
}