import { type } from "os";

var selectedIndex = 0;
var carousel: any;
var angle = 0;

export function setup()
{
    carousel = document.querySelector(".carousel");
    $.get("http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=7C218E8D1347C3CD6CB8117E5ED533BC&steamid=76561198250223174&format=json",
    JSON ,(data)=>{
        if(data.response.total_count ==0){
            console.log("no recent played games");
        }
    });
    var list = document.getElementsByClassName("carousel__cell");

    for (var i = 0; i < list.length; i++)
    {
        list[i].id= i.toString();
        list[i].addEventListener("click", () => 
        {
            var ev = event.target as any;
            rotateCarousel(ev);
            
        });      
    };
}

function rotateCarousel(target: any)
{  
    angle = (selectedIndex - target.id) * 20 + angle; //*20 to convert in angle
    carousel.style.transform = "translateZ(-880px) rotateY(" + angle + "deg)";
    
    selectedIndex = target;
    CellScript(target);
}

function CellScript(cell: any)
{

}
   