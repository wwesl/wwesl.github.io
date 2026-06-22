<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fish Fishing Fish</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- click detector -->
    <div id="main-clicker-container">
        <div id="clicker-container">
            <button type="button" id="clicker">Click to Fish</button>
            <img src="assets/fishingrod0.png" alt="" id="clicker-fishingrod">
        </div>
        <div id="clicker-bar"></div>
    </div>

    <!-- topbar stats -->
    <section name="stats" class="stats-container">
        <div class="stat">
            <span id="fcCounter">0</span> <i class="fa-solid fa-fish fc"></i>
        </div>
        <div class="stat">
            <span id="fcPerClick">1</span> <i class="fa-solid fa-fish fc"></i>/click
        </div>
        <div class="stat">
            <span id="fcPerSec">0</span> passive <i class="fa-solid fa-fish fc"></i>/s
        </div>
        <div class="stat">
            <span id="fcCooldown">1.0</span>s <i class="fa-solid fa-clock fc"></i>
        </div>
    </section>
    <div class="stat" id="upgrade-stat">
        [<span id="upgradeCounter">0</span> total upgrades] <i class="fa-solid fa-cog"></i>
    </div>
    
    <!-- upgrades -->
    <section name="upgrades" class="upgrades-container">
        <div class="frame" id="upg:rod">
            <button name="button"   ></button>
            <img    name="img"      src="assets/fishingrod0.png" alt="">
            <strong name="titl"    >Better Fishing Rod</strong>
            <p      name="desc"     >+# <i class="fa-solid fa-fish fc"></i>/click</p>
            <span   name="price"    ># <i class="fa-solid fa-fish fc"></i></span>
            <i      name="level"    >[0]</i>
        </div>
        <div class="frame" id="upg:net">
            <button name="button"   ></button>
            <img    name="img"      src="assets/fishingnet.png" alt="">
            <strong name="titl"    >Stronger Fishing Net</strong>
            <p      name="desc"     >+# <i class="fa-solid fa-fish fc"></i>/s</p>
            <span   name="price"    ># <i class="fa-solid fa-fish fc"></i></span>
            <i name="level"         >[0]</i>
        </div>
        <div class="frame" id="upg:spd">
            <button name="button"   ></button>
            <img    name="img"      src="assets/fishingrod0.png" alt="">
            <strong name="titl"    >Sharper Cast</strong>
            <p      name="desc"     >Increases fishing speed by #%</p>
            <span   name="price"    ># <i class="fa-solid fa-fish fc"></i></span>
            <i name="level"         >[0]</i>
        </div>
    </section>

    <!-- cleo -->
    <img src="./assets/background.png" alt="" id="background">
    <video src="./assets/cleo.webm" id="cleo"></video>

    <p id="res"></p>
    <footer>
        <p class="item">
            <i class="fa-solid fa-graduation-cap fc"></i>
            College Assignment
        </p>
        <b></b>
        <a class="item" href="https://github.com/wwesl/" target="_blank">
            <i class="fa-solid fa-code fc"></i>
            Coding: Weslei N. Rossinsky
        </a>
        <b></b>
        <a class="item" href="https://www.youtube.com/@fluffy_kn/posts" target="_blank">
            <i class="fa-solid fa-fish fc" style="letter-spacing: -.5vw;"></i>
            <i class="fa-solid fa-paintbrush fc"></i>
            Character Owner, Animation & Background
        </a>
    </footer>
</body>

<script src="./main.js"></script>
</html>