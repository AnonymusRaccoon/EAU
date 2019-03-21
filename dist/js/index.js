"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function home() {
    $("#content").load("dist/html/home.html", () => {
        setup();
        populateGrid();
    });
    document.getElementById("title").innerHTML = "EAU";
}
function openSettings() {
    $("#content").load("dist/html/settings.html");
    document.getElementById("title").innerHTML = "<i class='icon fas fa-arrow-left'></i>  Settings";
}
//Log In
const oidc_client_1 = __importDefault(require("oidc-client"));
var OidcSettings = {
    authority: "https://steamcommunity.com/openid",
    client_id: "7C218E8D1347C3CD6CB8117E5ED533BC",
    redirect_uri: "localhost:5500",
    response_type: "token",
    scope: "openid"
};
function steamLogIn() {
    console.log("Logging into steam");
    var manager = new oidc_client_1.default.UserManager(OidcSettings);
}
