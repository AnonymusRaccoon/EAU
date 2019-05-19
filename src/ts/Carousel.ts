import { type } from "os";
//import {Game} from "./Library"
import { Game } from "./Game";

var selectedIndex = 5;
var carousel: any;
var angle = 0;
var clientToken = "76561198196430655";
var SelectedRecentGames = [] as any;
var lastselected :any;
export function setup()
{
    selectedIndex = 0;
    //Get recent played game from steam//
    carousel = document.querySelector(".carousel");
    $.getJSON("http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=7C218E8D1347C3CD6CB8117E5ED533BC&steamid="+ clientToken +"&format=json",
    JSON ,(data:any)=>{

        if(data.response.total_count ==0){ // null check to prevent error there is no recent game
            console.log("no recent played games");
            return;
        }
        let SelectedRecentGames= [];
        for(let i = 0 ; i < data.response.total_count; i++) //Object.keys(data.response.games[0]) compte le nombre de clé a partir de 0
        {
            var game = data.response.games[i];
            SelectedRecentGames[i] = new GameMeta(game.appid, game.name, game.img_logo_url);
            if(i+1 == data.response.total_count){ iniCallback(SelectedRecentGames); }//launch script user variable after all callbacks are finished
        }
    });
}

function iniCallback(SelectedRecentGames : GameMeta[])
{ 
        
    //Add recent played game to carousel//
    var list = document.getElementsByClassName("carousel__cell") as any; //as any because we want a HTMLimage collection and htmlelement is not generic
    for (var i = 0; i < list.length; i++)//loop into carousel_cell to add event listener + thumb
    {
        if(i < SelectedRecentGames.length )
        {
            list[i].src = "https://steamcdn-a.akamaihd.net/steam/apps/"+SelectedRecentGames[i].AppId+"/header.jpg";
            list[i].dataset.game = SelectedRecentGames[i].AppId; 
            list[i].id= i.toString();
            list[i].addEventListener("click", () => 
            {
                var ev = event.target ;
                rotateCarousel(ev,false);           
            }); 
        }else
        {
        list[i].classList.add("disabled");           
        }
    }
    let el = document.createElement('Useless-div');
    el.id = Math.round(SelectedRecentGames.length/2).toString(); // trick the carouselroate to work even wihout a TargetEvent reference
    rotateCarousel(el,false)
    el.remove;
}

function rotateCarousel(target: any, bypass: boolean)
{   
    if(lastselected ==null)
    {
        lastselected = target;
    }
    if(lastselected != target)
    {
    lastselected.classList.remove("higlight");
    }

    angle = (selectedIndex - target.id) * 40 + angle; //*40 to convert in angle step

    //Launch the game on the front of the carousel
    if (selectedIndex == target.id && bypass == false) // the bypass is for ini
    {
        LaunchGame(target.dataset.game);
        return;
    }
    target.classList.add("higlight");// make the central cell bigger
    
    console.log("last selected " +lastselected.id);
    carousel.style.transform =  "translateZ(-1000px) rotateY(" + angle + "deg)";
    selectedIndex = target.id;
    lastselected= target;
}

function LaunchGame(game: any)
{
 console.log("launch game"+ game);
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
   