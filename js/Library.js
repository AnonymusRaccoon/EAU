class Game
{
    name;
    id;
    thumbnail;
    launcher;
    isInstalled;
    localPath;

    constructor(name, thumbnail)
    {
        this.name = name;
        this.thumbnail = thumbnail;
    }

    // constructor(name, id, thumbnail, launcher, isInstalled, localPath)
    // {
    //     this.name = name;
    //     this.id = id
    //     this.thumbnail = thumbnail;
    //     this.launcher = launcher;
    //     this.isInstaleld = isInstalled;
    //     this.localPath = localPath;
    // }
}


function populateGrid()
{
    var games = [new Game("La ligue du sel", "https://news-a.akamaihd.net/public/images/misc/GameBox.jpg"), new Game("Overnetoyé", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg") ];

    let grid = document.getElementById("library");
    for(var i = 0; i < games.length; i++)
    {
        let gridHtml = "<img src='" + games[i].thumbnail + "'/> <p>" + games[i].name + "</p>";
        let element = document.createElement("div");
        element.className = "game";
        element.innerHTML = gridHtml;
        grid.appendChild(element);
    }
}