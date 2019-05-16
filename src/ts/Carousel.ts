import { type } from "os";
//import {Game} from "./Library"
import { Game } from "./Game";

var selectedIndex = 0;
var carousel: any;
var angle = 0;
var clientToken = "76561198250223174";
export function setup()
{
    carousel = document.querySelector(".carousel");
    $.getJSON("http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=7C218E8D1347C3CD6CB8117E5ED533BC&steamid="+ clientToken +"&format=json",
    JSON ,(data)=>{
        
        if(data.response.total_count ==0){ // null check to prevent error
            console.log("no recent played games");
            return;
        }
        var SelectedRecentGames= [];
        for(let i = 0 ; i< data.response.games.length; i++)
        {
            let game = data.response.games[i];
            SelectedRecentGames[i] = new GameMeta(game.AppId, game.name, game.img_icon_url);
        }
        
        console.log(JSON.stringify(data));
        var list = document.getElementsByClassName("carousel__cell") as any; //as any because we want a HTMLimage collection and htmlelement is not generic

        for (var i = 0; i < list.length; i++)//loop into carousel_cell to add event listener
        {
            list[i].src = SelectedRecentGames[i].thumb;
            list[i].dataset.game = SelectedRecentGames[i].AppId;
            list[i].id= i.toString();
            list[i].addEventListener("click", () => 
            {
                var ev = event.target ;
                rotateCarousel(ev);
                
            });      
        };
    });

   
}

function rotateCarousel(target: any)
{  
    
    angle = (selectedIndex - target.id) * 20 + angle; //*20 to convert in angle
    if (selectedIndex == target.id)
    {
        LaunchGame(target.dataset.game);
        return;
    }
    carousel.style.transform = "translateZ(-880px) rotateY(" + angle + "deg)";
    selectedIndex = target.id;
    
}

function LaunchGame(game: any)
{
 console.log(game);
}

class GameMeta
{
    AppId: number;
    name: string;
    thumb: string;
    constructor(AppId: number, name: string, thumb:string)
    {
        this.AppId = AppId;
        this.name = name;
        this.thumb = thumb;
    }
}
   