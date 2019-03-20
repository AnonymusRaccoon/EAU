function home()
{
    $("#content").load("dist/html/home.html", () =>
    {
        setup()
        populateGrid();
    });
    document.getElementById("title").innerHTML = "EAU";
}

function openSettings()
{
    $("#content").load("dist/html/settings.html");
    document.getElementById("title").innerHTML = "<i class='icon fas fa-arrow-left'></i>  Settings";
}

//Log In
declare var Oidc: UserManager;

function steamLogIn()
{
    console.log("Logging into steam");
    new Oidc.UserManager("https://steamcommunity.com/openid", "7C218E8D1347C3CD6CB8117E5ED533BC", "localhost:5500");
}