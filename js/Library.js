"use strict";
var game = /** @class */ (function () {
    function game(name, id, thumbnail, launcher, isInstalled, localPath) {
        this.name = name;
        this.id = id;
        this.thumbnail = thumbnail;
        this.launcher = launcher;
        this.isInstalled = isInstalled;
        this.localPath = localPath;
    }
    return game;
}());
var launcher;
(function (launcher) {
    launcher[launcher["LocalOnly"] = 0] = "LocalOnly";
    launcher[launcher["Steam"] = 1] = "Steam";
})(launcher || (launcher = {}));
function populateGrid() {
    var games = [
        new game("La ligue du sel", "", "https://news-a.akamaihd.net/public/images/misc/GameBox.jpg", launcher.LocalOnly, false, ""),
        new game("Overnetoyé", "", "https://images-na.ssl-images-amazon.com/images/I/51kkc%2BjHrGL.jpg", launcher.LocalOnly, false, "")
    ];
    var grid = document.getElementById("library");
    for (var i = 0; i < games.length; i++) {
        var gridHtml = "<img src='" + games[i].thumbnail + "'/> <p>" + games[i].name + "</p>";
        var element = document.createElement("div");
        element.className = "game";
        element.onclick = function () { onGameClick(games[i]); };
        element.innerHTML = gridHtml;
        if (grid != null)
            grid.appendChild(element);
    }
}
function onGameClick(gameClicked) {
    console.log(gameClicked.name);
}
