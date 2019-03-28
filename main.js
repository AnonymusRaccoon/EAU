const { app, BrowserWindow, protocol } = require('electron')

var win;

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

app.setAsDefaultProtocolClient("eau");
app.on("ready", () =>
{
    createWindow();

    protocol.registerFileProtocol("eau", (request, callback) =>
    {
        console.log(request.url);
        console.log("callback: " + callback.name);
    }, (error) => 
    {
        console.log(error);
    });
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