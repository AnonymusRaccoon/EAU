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


function populateGrid()
{
    var games: Game[] =
        [
            new Game("La ligue du sel", "", "https://news-a.akamaihd.net/public/images/misc/GameBox.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, ""),
            new Game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, "", false, "")
        ];

    let grid = document.getElementById("library");
    for(var i = 0; i < games.length; i++)
    {
        let game = games[i];
        let gridHtml = "<img src='" + game.thumbnail + "'/> <p>" + game.name + "</p>";
        let element = document.createElement("div");
        element.className = "game";
        element.onclick = () => { onGameClick(game); }
        element.innerHTML = gridHtml;
        if(grid != null)
            grid.appendChild(element);
    }
}

function onGameClick(gameClicked: Game)
{
    console.log(gameClicked.name);
}