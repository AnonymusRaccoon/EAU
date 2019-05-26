const electron = require("electron");
const path = require("path");
const fs = require("fs");

class Store
{   
    //Create a Store class, set the file path and read the file in order to reduce disk access.
    constructor(name)
    {
        this.path = path.join((electron.app || electron.remote.app).getPath("userData"), name + ".json");
        this.data = readFile(this.path);
    }

    get(key)
    {
        return this.data[key];
    }

    set(key, value)
    {
        this.data[key] = value;
        fs.writeFileSync(this.path, JSON.stringify(this.data));
    }

    //Was trying to create a proper method for saving the games but I don't have time.
    // setGames(games)
    // {
    //     for(i = 0; i < games.Length; i++)
    //     {
    //         this.data["games"].
    //     }
    // }
}

function readFile(path)
{
    try
    {
        return JSON.parse(fs.readFileSync(path));
    }
    catch
    {
        return {};
    }
}

module.exports = Store;