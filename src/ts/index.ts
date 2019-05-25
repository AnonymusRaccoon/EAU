// import $ from "jquery"; //Using global scope jquery instead beacause it make a huge file if we use this.
import { setup } from "./Carousel";
import { populateGrid } from "./Library"
const Store = require("../js/store");


$(function ()
{
    const config = new Store("config");
    if(config.get("dark-mode"))
    {
        $("#body").addClass("dark-mode");
    }

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
        $(".switch").find("input[type=checkbox]").on("change",function() {
            var checked = $(this).prop("checked");
    
            if(checked)
                $("#body").addClass("dark-mode");
            else
                $("#body").removeClass("dark-mode");
    
            const store = new Store("config");
            store.set("dark-mode", checked);
        });

        if($("#body").hasClass("dark-mode"))
            $(".switch").find("input[type=checkbox]").prop("checked", true);
    });
    document.getElementById("title").innerHTML = "<i class='icon fas fa-arrow-left'></i>  Settings";
}


require("./Library");
require("./Carousel");