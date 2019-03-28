// import $ from "jquery"; //Using global scope jquery instead beacause it make a huge file if we use this.
import { setup } from "./Carousel";
import { populateGrid } from "./Library"

$(function ()
{
    home();
    document.getElementById("title").onclick = () => { home() };
    document.getElementById("searchBtn").onclick = () => { openSearch() };
    document.getElementById("settingsBtn").onclick = () => { openSettings() };
});

function home()
{
    $("#content").load("fragments/home.html", () =>
    {
        setup()
        populateGrid();
    });
    document.getElementById("title").innerHTML = "EAU";
}

function openSearch()
{
    let input = <HTMLInputElement>document.getElementById("searchInput");

    input.value = "";
    input.focus();
}

function openSettings()
{
    $("#content").load("fragments/settings.html", () =>
    {
        //Do things when the settings has been loaded.
    });
    document.getElementById("title").innerHTML = "<i class='icon fas fa-arrow-left'></i>  Settings";
}

require("./Library");
require("./Carousel");