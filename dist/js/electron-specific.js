"use strick";
const { shell } = require("electron");

$(".browser").click((event) =>
{
    console.log("Steam log clicked");
    event.preventDefault();
    console.log(shell);
    shell.openExternal(event.target.href);
});