import { LoadGames, UpdateGamesJSON } from "./GameLoader";
import { Game, launcher } from "./Game";

export function populateGrid()
{
    const games: Game[] = LoadGames();
    UpdateGamesJSON();

    let grid = document.getElementById("library");
    for (var i = 0; i < games.length; i++)
    {
        let game = games[i];
        let gridHtml = "<img src='" + game.thumbnail + "'/> <p>" + game.name + "</p>";
        let element = document.createElement("div");
        element.className = "game";
        element.onclick = () => { onGameClick(game); }
        
        // //Check if the game is already downloaded and if it is, display it
        // if(isElectron)
        // {
        //     if(store.get(game.appid) != null)
        //         gridHtml += '<img src="/drawable/check.svg" style="position: absolute; right: 0; padding: 5px;"/>'
        // }
        
        element.innerHTML = gridHtml;
        if (grid != null)
            grid.appendChild(element);
    }



    // var steamToken;
    // const Store = require("../js/store");
    // const userAgent = navigator.userAgent.toLowerCase();
    // console.log("Agent: " + userAgent);
    // var isElectron = userAgent.indexOf(" electron/") > -1;
    // const store = new Store("SteamGamesMetas");
    // if (isElectron)
    // {
    //     const tknStore = new Store("account");
    //     steamToken = tknStore.get("steam");
    //     console.log("steamToken: " + steamToken);
    // }
    // else
    // {
    //     console.log("AGENT IS NOT ELECTRON, NO HANDLING FOR NOW");
    //     steamToken = "76561198250223174"; //A default steam client id (for testing only)
    // }

    // $.get("https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/" +
    //     "?key=7C218E8D1347C3CD6CB8117E5ED533BC" +
    //     "&steamid=" + steamToken +
    //     "&include_appinfo=1" +
    //     "&include_played_free_games=1" +
    //     "&appids_filter=&format=json", (data) =>
    //     {
            // let response: SteamResponse = data.response;
            
        // });
}

function onGameClick(gameClicked: Game)
{
    console.log(gameClicked.name);
}
