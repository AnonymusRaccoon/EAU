interface SteamResponse
{
    game_count: number;
    games: Game[];
}

class Game
{
    name: string;
    id: string;
    thumbnail: string;
    launcher: launcher;
    launcherID: string;
    isInstalled: boolean;
    localPath: string;

    constructor(name: string, id: string, thumbnail: string, launcher: launcher, launcherID: string, isInstalled: boolean, localPath: string)
    {
        this.name = name;
        this.id = id
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
    $.get("https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/" +
        "?key=7C218E8D1347C3CD6CB8117E5ED533BC" +
        "&steamid=76561198250223174" +
        "&include_appinfo=1" +
        "&include_played_free_games=1" +
        "&appids_filter=", (data) =>
        {
            let response: SteamResponse = data.response;
            
            let grid = document.getElementById("library");
            for (var i = 0; i < response.game_count; i++)
            {
                let game = response.games[i];
                let thumbnail = "https://steamcdn-a.akamaihd.net/steam/apps/" + data.response.games[i].appid + "/header.jpg";
                let gridHtml = "<img src='" + thumbnail + "'/> <p>" + game.name + "</p>";
                let element = document.createElement("div");
                element.className = "game";
                element.onclick = () => { onGameClick(game); }
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