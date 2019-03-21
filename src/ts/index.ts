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
    $("#content").load("dist/html/home.html", () =>
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
    $("#content").load("dist/html/settings.html");
    document.getElementById("title").innerHTML = "<i class='icon fas fa-arrow-left'></i>  Settings";
}

//Log In
// import Oidc, { UserManagerSettings } from "oidc-client";

// var OidcSettings: UserManagerSettings = 
// {
//     authority: "https://steamcommunity.com/openid", 
//     client_id: "7C218E8D1347C3CD6CB8117E5ED533BC", 
//     redirect_uri: "localhost:5500",
//     response_type: "token",
//     scope: "openid"
// };

// function steamLogIn()
// {
//     console.log("Logging into steam");
//     var manager = new Oidc.UserManager(OidcSettings);
//     manager.signinPopup();
// }

require("./Library");
require("./Carousel");