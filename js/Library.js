"use strict";
var Game = /** @class */ (function () {
    function Game(name, id, thumbnail, launcher, launcherID, isInstalled, localPath) {
        this.name = name;
        this.id = id;
        this.thumbnail = thumbnail;
        this.launcher = launcher;
        this.launcherID = launcherID;
        this.isInstalled = isInstalled;
        this.localPath = localPath;
    }
    return Game;
}());
var launcher;
(function (launcher) {
    launcher[launcher["LocalOnly"] = 0] = "LocalOnly";
    launcher[launcher["Steam"] = 1] = "Steam";
})(launcher || (launcher = {}));
function populateGrid() {
    var games = [
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
    var grid = document.getElementById("library");
    var _loop_1 = function () {
        var game = games[i];
        var gridHtml = "<img src='" + game.thumbnail + "'/> <p>" + game.name + "</p>";
        var element = document.createElement("div");
        element.className = "game";
        element.onclick = function () { onGameClick(game); };
        element.innerHTML = gridHtml;
        if (grid != null)
            grid.appendChild(element);
    };
    for (var i = 0; i < games.length; i++) {
        _loop_1();
    }
}
function onGameClick(gameClicked) {
    console.log(gameClicked.name);
}
function openSearch() {
    var input = document.getElementById("searchInput");
    input.value = "";
    input.focus();
}
