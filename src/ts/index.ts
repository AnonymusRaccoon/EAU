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
    $("#content").load("dist/html/settings.html", () =>
    {
        // document.getElementById("steamLogBtn").onclick = () => { steamLogIn(); };
    });
    document.getElementById("title").innerHTML = "<i class='icon fas fa-arrow-left'></i>  Settings";
}

//Log In (not necesary, only need to use public methods for now)
// import Oidc, { UserManagerSettings, OidcClientSettings } from "oidc-client";

// var OidcSettings: OidcClientSettings = 
// {
//     authority: "https://steamcommunity.com/openid", 
//     redirect_uri: "localhost:5500",
//     response_type: "token",
//     scope: "openid"
// };

// function steamLogIn()
// {
//     Oidc.Log.logger = console;
//     console.log("Logging into steam");
//     var client = new Oidc.OidcClient(OidcSettings);
//     client.createSigninRequest();
// }

require("./Library");
require("./Carousel");