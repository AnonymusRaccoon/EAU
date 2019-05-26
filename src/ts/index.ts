import { setup } from "./Carousel";
import { populateGrid } from "./Library"
const Store = require("../js/store");


//Initialization of the app (load the home page, check if the user wants to use the dark mode and add buttons clicks)
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

//Load the home page (called when the user click the home button)
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

//Load the settings menu and set the settings to their good state.
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