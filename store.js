require("elecron");
require("path");
require("fs");

class Store
{    
    constructor(name)
    {
        this.path = path.join((Electron.app || Electron.remote.app).getPath("userData"), name + ".json");
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
}

function readFile(path)
{
    try
    {
        return JSON.parse(fs.readFileSync(path));
    }
    catch
    {
        return null;
    }
}

module.exports = Store;