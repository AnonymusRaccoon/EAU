/* This script is for managing local game discovery */

const fs = require('fs');
const vdf = require('simple-vdf');
const path = require("path");
const Registery = require('winreg');
const rl = require('readline-specific');
const store = require('./store');


module.exports = {
    init: function () { GetGameLocation(); }
}

function GetGameLocation()
{
    
    //64bit regObj path    
    RegSteamPath = new Registery({
        hive: Registery.HKLM,
        key: '\\SOFTWARE\\Wow6432Node\\Valve\\Steam'
    });

    //32bit regObj path
    RegSteamPathx86 = new Registery({
        hive: Registery.HKLM,
        key: 'HKEY_LOCAL_MACHINE\SOFTWARE\Valve\Steam'
    });

    //read steam install folder key value (32bit steam)
    RegSteamPathx86.get("InstallPath", GetLibrary);

    //read steam install folder key value (64bit steam)
    RegSteamPath.get("InstallPath", GetLibrary );
}



function GetLibrary(err, data)
{
    //Error handling (trust me)
    if (err)
        return;
    
    
    //normalise path

    let SteamPath = path.normalize(data.value);
    let store__ = new store("SteamGamesMetas");
    store__.set("SteamPath", SteamPath)

    let LibrarySteamPath = SteamPath + "/steamapps/libraryfolders.vdf";
    
    //read game library location
      
     fs.readFile(LibrarySteamPath, (err, data) =>
     {
        if (err) throw err;
        let str = data.toString();
        let raw = vdf.parse(str);
        let SteamJSONobj = JSON.parse( JSON.stringify(raw) );
        if (SteamJSONobj === null){console.warn("can't read json")}
        
        //assign default game library, steam app(not common)
        var libraries = [SteamPath];
       
        //get object lenght, +1 because i start at 1
        let totalKey = Object.keys(SteamJSONobj.LibraryFolders).length + 1;

        for (let i = 1; i < totalKey; i++ )
        {
            if(SteamJSONobj.LibraryFolders[i] != null)
            {
                //WARNING i is initiliated at 1
                libraries[i] = path.normalize(SteamJSONobj.LibraryFolders[i].toString());
            }
        }
        //console.log(libraries);
        AnalyseLibrary(err,libraries);
    });
}

function AnalyseLibrary(err, data)
{      
    //Look into steam libraries folders for acf file
    for(let i=0;i < data.length; i++ )
    {
            
        let files = fs.readdirSync(path.normalize(data[i] + "\\steamapps"));        
           
        //only select acf file
        for(let o = 0; o < files.length; o++)
        {     
            if(path.extname(files[o]) === '.acf')
                { 
                rl.oneline(data[i] + "\\steamapps\\" + files[o] ,7, function(err,str){//note change to cut dirname
                    let Game = new GameMeta(null, Cutter(str));
                    rl.oneline(data[i] + "\\steamapps\\" + files[o] ,3, function(err,str_)
                    { 
                        Game.AppId = Cutter(str_); 
                        let store_ = new store("SteamGamesMetas"); 
                        store_.set(Game.AppId, Game);
                    });            
                });
            }
        }
    }
}

function Cutter (str)
{
    //select the last text between quote aka hard cutting
    str = str.substring(0, str.length-1); //-1 to ignore the lasts closings ""
    let index = str.lastIndexOf('"');
    str = str.substring(index+1, str.length); //+1 because the " is excluded
    return str;

};

class GameMeta
{
    constructor(AppId, GameDirectory)
    {
        this.AppId = AppId;
        this.GameDirectory = GameDirectory;
    }
}


