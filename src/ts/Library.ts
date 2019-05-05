interface SteamResponse
{
    game_count: number;
    games: Game[];
}

class Game
{
    name: string;
    appid: string;
    thumbnail: string;
    launcher: launcher;
    launcherID: string;
    isInstalled: boolean;
    localPath: string;

    constructor(name: string, appid: string, thumbnail: string, launcher: launcher, launcherID: string, isInstalled: boolean, localPath: string)
    {
        this.name = name;
        this.appid = appid
        this.thumbnail = thumbnail;
        this.launcher = launcher;
        this.launcherID = launcherID;
        this.isInstalled = isInstalled;
        this.localPath = localPath;
    }
}

enum launcher
{
    LocalOnly,
    Steam
}

export function populateGrid()
{
    var steamToken;
    const Store = require("../js/store");
    const userAgent = navigator.userAgent.toLowerCase();
    var isElectron = userAgent.indexOf(" electron/") > -1;
    const store = new Store("SteamGamesMetas");
    if (isElectron)
    {
      
        const tknStore = new Store("account");
        steamToken = tknStore.get("steam");
        console.log("steamToken: " + steamToken);
    }
    else
    {
        console.log("AGENT IS NOT ELECTRON, NO HANDLING FOR NOW");
        steamToken = "76561198250223174"; //A default steam client id (for testing only)
    }

    $.get("https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/" +
        "?key=7C218E8D1347C3CD6CB8117E5ED533BC" +
        "&steamid=" + steamToken +
        "&include_appinfo=1" +
        "&include_played_free_games=1" +
        "&appids_filter=", (data) =>
        {
            let response: SteamResponse = data.response;
            
            let grid = document.getElementById("library");
            for (var i = 0; i < response.game_count; i++)
            {
                let game = response.games[i];
                let thumbnail = "https://steamcdn-a.akamaihd.net/steam/apps/" + game.appid + "/header.jpg";
                let gridHtml = "<img src='" + thumbnail + "'/> <p>" + game.name + "</p>";
                let element = document.createElement("div");
                element.className = "game";
                element.onclick = () => { onGameClick(game); }
                
                //Check if the game is already downloaded and if it is, display it
                if(isElectron)
                {
                    if(store.get(game.appid) != null)
                        gridHtml += '<img src="/drawable/check.svg" style="position: absolute; right: 0; padding: 5px;"/>'
                }
                
                element.innerHTML = gridHtml;
                if (grid != null)
                    grid.appendChild(element);
            }
        });
}

function onGameClick(gameClicked: Game)
{
    console.log(gameClicked.name);
}
