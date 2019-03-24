<?php
    require("openid.php");
    require("secrets.php"); //File excluded from the git repository. This file contains api keys and client secrets.

    $openid = new LightOpenID("eau.raccoon-sdg.fr");
    if(!$openid->mode)
    {
        $openid->identity = "https://steamcommunity.com/openid";
        header("Location: " . $openid->authUrl());
    }
    elseif($openid->mode == "cancel")
    {
        echo("<script>window.close();</script>");
    }
    elseif($openid->validate())
    {
        echo($openid->identity);
    }
?>
<!DOCTYPE HTML>
<html>
    <head>
    </head>
    <body>
        <h1>Test</h1>
    </body>
</html>