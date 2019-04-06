/* This script is for managing local game discovery */

const fs = require('fs');
const vdf = require('simple-vdf');
const path = require("path");
const Registery = require('winreg');

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

    
    let NormalisedSteamPath = path.normalize(data.value + "/steamapps/libraryfolders.vdf");
    
    //read game library location
      
     fs.readFile(NormalisedSteamPath, (err, data) =>
     {

        

        if (err) throw err;
        let str = data.toString();
        let raw = vdf.parse(str);
        let SteamJSONobj = JSON.parse( JSON.stringify(raw) );
        if (SteamJSONobj === null){console.warn("can't read json")}
        
        var libraries = [];
       
        //get object lenght, +1 because i start at 1
        let totalKey = Object.keys(SteamJSONobj.LibraryFolders).length + 1;

        for (let i = 1; i < totalKey; i++ )
        {
            if(SteamJSONobj.LibraryFolders[i] != null)
            {
                //WARNING i is initiliated at 1
                libraries[i-1] = SteamJSONobj.LibraryFolders[i];
                console.log(libraries[i-1]);
            }
        }
        
    });
function AnalyseLibrary(err, data)
    {

    }
}

