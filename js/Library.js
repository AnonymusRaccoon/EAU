class Game
{
    name;
    thumbnail;

    constructor(name, thumbnail)
    {
        this.name = name;
        this.thumbnail = thumbnail;
    }
}


function populateGrid()
{
    console.log("test");
    var games = ["La ligue du sel", "Overnetoyé" ];

    let grid = document.getElementById("library");
    for(var i = 0; i < games.length; i++)
    {
        let gridHtml = "<div>" + games[i] + "</div>";
        let element = document.createElement("div");
        element.innerHTML = gridHtml;
        grid.appendChild(element);
    }
}