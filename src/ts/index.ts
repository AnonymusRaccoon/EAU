function openSettings()
{
    $("#content").load("dist/html/settings.html");
}

function home()
{
    $("#content").load("dist/html/home.html", () =>
    {
        setup()
        populateGrid();
    });   
}


