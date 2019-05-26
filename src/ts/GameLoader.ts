const Store = require("../js/store");
import * as TokenManager from "./TokenManager";
import { Game, launcher } from "./Game";

//Read the game.json file and return the list of detected games.
export function LoadGames(): Game[]
{
    const userAgent = navigator.userAgent.toLowerCase();
    var isElectron = userAgent.indexOf(" electron/") > -1;
    if (isElectron)
    {
        const store = new Store("Games");
        return store.get("games");
    }
    else
    {
        console.log("AGENT IS NOT ELECTRON, NO HANDLING FOR NOW");
        return null;
    }
}

//Refresh the game.json file with content from the logged in accounts
export function UpdateGamesJSON()
{
    AddSteamGames();
}

//Add all steam games to the database.
function AddSteamGames()
{
    const steamToken = TokenManager.getSteamToken();

    $.get("https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/" +
        "?key=7C218E8D1347C3CD6CB8117E5ED533BC" +
        "&steamid=" + steamToken +
        "&include_appinfo=1" +
        "&include_played_free_games=1" +
        "&appids_filter=&format=json", (data) =>
        {
            var games: Game[] = [];
            for (var i = 0; i < data.response.game_count; i++)
            {
                let gameData = data.response.games[i];
                let thumbnail = "https://steamcdn-a.akamaihd.net/steam/apps/" + gameData.appid + "/header.jpg";
                games[i] = new Game(gameData.name, gameData.appid, thumbnail, launcher.Steam, null, true, null);
            }

            //Should use a cookie if the user is in the browser
            const store = new Store("Games");
            store.set("games", games); //SHOULDN'T DO IT LIKE THAT, It override every games in the json.
        });
}