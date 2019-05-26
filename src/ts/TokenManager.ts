//Will return the steam token of the user if he is logged in. Else, it will return a default steam token (for debbug)
export function getSteamToken(): string
{
    const userAgent = navigator.userAgent.toLowerCase();
    console.log("Agent: " + userAgent);
    var isElectron = userAgent.indexOf(" electron/") > -1;
    if (isElectron)
    {
        const Store = require("../js/store");
        const tknStore = new Store("config");
        const tkn = tknStore.get("steam");
        return tkn != null ? tkn : "76561198196430655";
    }
    else
    {
        console.log("AGENT IS NOT ELECTRON, NO HANDLING FOR NOW");
        return "76561198196430655"; //A default steam client id (for testing only)
    }
}