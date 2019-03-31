<?php
    require("openid.php");
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
?>
<!DOCTYPE HTML>
<html>
    <head>
    </head>
    <body>
        <h1>Test</h1>
        <a id="appOpen" href="eau://test">Open app (click here if you are not automatically redirected)</a>
    </body>
</html>
<?php
        echo("<script>var a = document.getElementById('appOpen'); a.href = 'eau://steam-" . $openid->identity . "'</script>");
    }
?>