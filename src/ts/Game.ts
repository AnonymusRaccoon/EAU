export class Game
{
    name: string;
    appid: string;
    thumbnail: string;
    launcher: launcher;
    launcherID: string;
    isInstalled: boolean;
    localPath: string;

    constructor(name: string, appid: string, thumbnail: string, launcher: launcher, launcherID: string, isInstalled: boolean, localPath: string)
    {
        this.name = name;
        this.appid = appid
        this.thumbnail = thumbnail;
        this.launcher = launcher;
        this.launcherID = launcherID;
        this.isInstalled = isInstalled;
        this.localPath = localPath;
    }
}

export enum launcher
{
    LocalOnly,
    Steam
}