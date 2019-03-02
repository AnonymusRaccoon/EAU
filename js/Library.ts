class game
{
    name : string;
    id : string;
    thumbnail : string;
    launcher : launcher;
    isInstalled : boolean;
    localPath : string;

    constructor(name : string, id : string, thumbnail : string, launcher : launcher, isInstalled : boolean, localPath : string)
    {
        this.name = name;
        this.id = id
        this.thumbnail = thumbnail;
        this.launcher = launcher;
        this.isInstalled = isInstalled;
        this.localPath = localPath;
    }
}

enum launcher
{
    LocalOnly,
    Steam
}


function populateGrid()
{
    var games =
        [
            new game("La ligue du sel", "", "https://news-a.akamaihd.net/public/images/misc/GameBox.jpg", launcher.LocalOnly, false, ""),
            new game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, false, "")
        ];

    let grid = document.getElementById("library");
    for(var i = 0; i < games.length; i++)
    {
        let gridHtml = "<img src='" + games[i].thumbnail + "'/> <p>" + games[i].name + "</p>";
        let element = document.createElement("div");
        element.className = "game";
        element.onclick = () => { onGameClick(games[i]); }
        element.innerHTML = gridHtml;
        if(grid != null)
            grid.appendChild(element);
    }
}

function onGameClick(gameClicked : game)
{
    console.log(gameClicked.name);
}