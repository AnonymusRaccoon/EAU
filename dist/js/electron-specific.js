"use strick";
const { shell } = require("electron");

$(".browser").click((event) =>
{
    if(shell != null)
        event.preventDefault();

    shell.openExternal(event.target.href);
});