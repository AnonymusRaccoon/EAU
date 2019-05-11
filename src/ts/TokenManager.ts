export function getSteamToken(): string
{
    const Store = require("../js/store");
    const userAgent = navigator.userAgent.toLowerCase();
    console.log("Agent: " + userAgent);
    var isElectron = userAgent.indexOf(" electron/") > -1;
    if (isElectron)
    {
        const tknStore = new Store("account");
        const tkn = tknStore.get("steam");
        return tkn != null ? tkn : "76561198250223174";
    }
    else
    {
        console.log("AGENT IS NOT ELECTRON, NO HANDLING FOR NOW");
        return "76561198250223174"; //A default steam client id (for testing only)
    }
}