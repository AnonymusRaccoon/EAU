const { app, BrowserWindow, ipcMain } = require('electron')
const LocalGameDiscovery = require("./src/js/LocalGameSearch");
const Store = require("./src/js/store");
const log = require("electron-log");
const { execFile } = require('child_process');
const path = require("path");

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

   
    LocalGameDiscovery.init();   
}

function createWindow()
{
    win = new BrowserWindow({ width: 1080, height: 720, webPreferences: { webSecurity: false } });
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

ipcMain.on('LaunchGame', LaunchGame); 
function LaunchGame(event, game)
{
    game = JSON.parse(game);
    if(game.isInstalled != true && game.launcher != 0)
    {
        console.error(game.name + " is not installed")
    }
    if(game.launcher !=null && game.launcher == 1)
    {
        
        require("openurl").open("steam://rungameid/" + game.appid)
        
    }else if( game.launcher == null)
    {
        console.log ("game launcher is null");
    }
}


