const { app, BrowserWindow } = require('electron')
// const LocalGameDiscovery = require("./src/js/LocalGameSearch");
const Store = require("./src/js/store");
const log = require("electron-log");

var win;

const lock = app.requestSingleInstanceLock();

if (!lock)
    app.quit();
else
{
    app.on("second-instance", (_event, argv) =>
    {
        log.log("handling new arg (from second instance)");
        handleArgs(argv.slice(1).toString());
        if (win)
        {
            if (win.isMinimized())
                win.restore();
            win.focus();
        }
    });

    app.setAsDefaultProtocolClient("eau");
    app.on("ready", () =>
    {
        createWindow();
        handleArgs(process.argv.slice(1).toString());
    });

    app.on("window-all-closed", () =>
    {
        if (process.platform !== "darwin")
            app.quit()
    });

    app.on("activate", () =>
    {
        if (win === null)
            createWindow();
    });

    // console.log(typeof LocalGameDiscovery.init);
    // LocalGameDiscovery.init();    
}

function createWindow()
{
    win = new BrowserWindow({ width: 1080, height: 720 });
    win.loadFile("dist/html/index.html");
    win.setMenu(null);
    win.webContents.openDevTools();
    win.on("closed", () =>
    {
        win = null;
    });
}

function handleArgs(arg)
{
    log.log("arg: " + arg);
    if (arg.startsWith("eau://steam-"))
    {
        var token = arg.substring(arg.lastIndexOf("id/") + 3);
        log.log("Token: " + token);
        var store = new Store("account");
        store.set("steam", token);
    }
}