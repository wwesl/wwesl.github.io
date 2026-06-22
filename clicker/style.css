const params = new URLSearchParams(location.search);

const res = document.getElementById("res");

const fcCounter = document.getElementById("fcCounter");
const fcPerClickCounter = document.getElementById("fcPerClick");
const fcPassiveCounter = document.getElementById("fcPerSec");
const cooldownCounter = document.getElementById("fcCooldown");
const upgradeCounter = document.getElementById("upgradeCounter");
const cleo = document.getElementById("cleo");

let nextSave = 60000;

let fc = 0;
let fcPerClick = 1;
let fcPassive = 0;
let totalUpgrades = 0;
let LEVELS = {};

const _Number = window.Number;
const Number = (val) => {
    let num = _Number(val);
    if (val == "inf")
        return Infinity;
    if (isNaN(num))
        return 0;
    return num;
}

const round = (val, decimals = 0) => {
    return Math.round(val * 10 ** decimals) / 10 ** decimals;
}


function updateStats() {
    fcCounter.textContent = fc;
    fcPerClickCounter.textContent = fcPerClick;
    fcPassiveCounter.textContent = fcPassive;
    totalUpgrades = 0;
    for (let id in LEVELS) {
        totalUpgrades += LEVELS[id];
    }
    upgradeCounter.textContent = totalUpgrades;
}

{ // LOAD SAVE
    fc = Number(params.get("fc") ?? 0);
    // fcPerClick = Number(params.get("fcpc") ?? 1);
    // fcPassive = Number(params.get("fcpass") ?? 0);
    params.forEach((v, i) => {
        if (i.startsWith("l-"))
            LEVELS[i] = Number(v);
    })
    updateStats();
}

/////  CLICKER  ///////////////////////////////////////////////////////////////////////////

const clicker = document.getElementById("clicker");
const clickerBar = document.getElementById("clicker-bar");
const clickerFishingRod = document.getElementById("clicker-fishingrod");
let clickCooldown = 2000;
let nextAllowedClick = 0;

clicker.addEventListener("click", () => {
    const now = performance.now();
    if (now < nextAllowedClick) return;
    nextAllowedClick = now + clickCooldown;

    fc += fcPerClick;
    updateStats();
    cleo.currentTime = 0;
    cleo.playbackRate = 2000/clickCooldown;
    cleo.play();

    clicker.classList.add("cooldown");
    clickerFishingRod.classList.add("cooldown");
    setTimeout(() => {
        clicker.classList.remove("cooldown");
        clickerFishingRod.classList.remove("cooldown");
    }, clickCooldown);
});


/////  UPGRADES  //////////////////////////////////////////////////////////////////////////

function upgrade_blinkRed(el, setWhite) {
    if (setWhite) {
        el.classList.remove("cooldown", "red-outline");
        return;
    } else
        el.classList.add("cooldown", "red-outline");

    setTimeout(() => upgrade_blinkRed(el, true), 500);
}
function getLvl(num, max) {
    return (max != null && num >= max) ? "[MAX]" : ("["+num+"]");
}

function upgrade_load(id, saveid, upd, maxLevel) {
    let element = document.getElementById(id);
    let upg = element.children;
    let price = upg.price;
    let me = {
        el: element,
        obj: upg,
        rawdesc: upg.desc.innerHTML,
        lv: Number(params.get(saveid) ?? 0),
    };
    
    let set = function(lv) {
        LEVELS[saveid] = me.lv;
        upg.level.textContent = getLvl(me.lv, maxLevel);
        if (maxLevel != null && lv >= maxLevel)
            element.classList.add("cooldown");
        upd(me);
        updateStats();
    }
    set(me.lv);
    
    upg.button.addEventListener("click", () => {
        if (maxLevel != null && me.lv >= maxLevel)
            return;

        let num = Number(price.textContent);
        if (fc < num)
            upgrade_blinkRed(me.el);
        else {
            fc -= num;
            me.lv++;
            set(me.lv);
            save();
        }
    });

    return me;
}

{// ROD UPGRADE
    let getPower = function(level) {
        if (level == 0) return 1;
        return Math.floor(3 * 1.45**level);
    }
    let getCost = function(level) {
        return Math.floor(10 * 1.6**level);
    }
    let priceRaw;

    upgrade_load("upg:rod", "l-rodupg",
        (upg) => {
            if (priceRaw == null) priceRaw = upg.obj.price.innerHTML;
            let pow = getPower(upg.lv);
            let next = getPower(upg.lv + 1);

            upg.obj.price.innerHTML = priceRaw.replace("#", getCost(upg.lv));
            upg.obj.desc.innerHTML = upg.rawdesc.replace("#", next-pow);
            fcPerClick = pow;
        }
    )
}

{// NET UPGRADE
    let getPower = function(level) {
        if (level==0) return 0;
        return Math.floor(3 * 1.35**level);
    }
    let getCost = function (level) {
        return Math.floor(10 * 1.55**level);
    }
    let priceRaw;

    upgrade_load("upg:net", "l-netupg",
        (upg) => {
            if (priceRaw == null) priceRaw = upg.obj.price.innerHTML;
            let pow = getPower(upg.lv);
            let next = getPower(upg.lv+1);

            upg.obj.titl.textContent = (upg.lv == 0) ? "Fishing Net" : "Stronger Fishing Net";
            upg.obj.price.innerHTML = priceRaw.replace("#", getCost(upg.lv));
            upg.obj.desc.innerHTML = upg.rawdesc.replace("#", next-pow);
            fcPassive = pow;
        }
    )
}
setInterval(() => { fc+=fcPassive;  updateStats(); }, 1000);

{// SPEED UPGRADE
    let getPower = function(level) {
        return level * 8;
    }
    let getCost = function(level) {
        return Math.floor(100 * 2**level);
    }
    let priceRaw;

    upgrade_load("upg:spd", "l-spdupg",
        (upg) => {
            if (priceRaw == null) priceRaw = upg.obj.price.innerHTML;
            let pow = round((1 - (getPower(upg.lv) / 100)), 2);
            let nextPercent = Math.round(getPower(upg.lv + 1));
            cooldownCounter.textContent = (pow == 1) ? "2.0" : pow;
            
            if (upg.lv < 5) {
                upg.el.style.opacity = "1";
                upg.obj.price.innerHTML = priceRaw.replace("#", getCost(upg.lv));
                upg.obj.desc.innerHTML = upg.rawdesc.replace("#", nextPercent);
            }
            else {
                upg.el.style.opacity = ".5";
                upg.obj.button.style["background-color"] = "#A55";
                upg.obj.button.style["outline-color"] = "#F55";
                upg.obj.button.style["pointer-events"] = "none";
                upg.obj.price.innerHTML = priceRaw.replace("#", "xxx");
                upg.obj.desc.innerHTML = upg.rawdesc.replace("#", pow);
            }

            clickCooldown = pow * 2000;
        }
    , 5)
}


/////  SETUP  /////////////////////////////////////////////////////////////////////////////

window.addEventListener("resize", function () {
    res.textContent = `${window.innerWidth} x ${window.innerHeight}`;
});


function setup() {
}

function tick() {
    const now = performance.now();

    let p = 1 - (nextAllowedClick-now) / clickCooldown;
    p = Math.max(0, Math.min(1, p));
    clickerBar.style.width = (p * 100) + "%";
    clickerBar.style.opacity = p >= 1 ? "0" : "0.9";

    if (now > nextSave) {
        nextSave = now + 20000;
        save();
    }

    requestAnimationFrame(tick);
}

function save() {
    params.set("fc", fc)
    params.set("fcpc", fcPerClick)
    params.set("fcpass", fcPassive)
    for (let id in LEVELS) {
        params.set(id, LEVELS[id]);
    }
    history.replaceState({}, "", "?" + params.toString());
}


setup();
tick();