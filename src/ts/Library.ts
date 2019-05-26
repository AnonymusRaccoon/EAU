import { LoadGames, UpdateGamesJSON } from "./GameLoader";
import { Game } from "./Game";
const { ipcRenderer } = require('electron');

//Will get the games in the game.json file and display them in a grid view. Will also refresh the game.json.
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
        
        if(game.isInstalled)
            gridHtml += '<img src="../../dist/drawables/installed.svg" style="position: absolute; top: 0; right: 0; padding: 5px;"/>'
        
        element.innerHTML = gridHtml;
        if (grid != null)
            grid.appendChild(element);
    }
}

function onGameClick(gameClicked: Game)
{
    //Send the click event to the nodeJS process to handle game launch.
    ipcRenderer.send("LaunchGame", gameClicked);
}
