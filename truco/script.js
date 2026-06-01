const redtext = document.getElementById("redpoints");
const bluetext = document.getElementById("bluepoints");
const wintext = document.getElementById("wintext");
const winMsg = "VITÓRIA DO TIME ";

let points = {
    red : 0,
    blue : 0
};
let roundFinished;

function updateVisuals() {
    redtext.innerHTML = points.red;
    bluetext.innerHTML = points.blue;
}

function increment(team, amount) {
    if (roundFinished) return;

    points[team] += amount;

    if (points[team] >= 12) {
        wintext.style.opacity = "1";
        wintext.style.color = (team == "red") ? "red" : "blue";
        wintext.textContent = winMsg + ((team == "red") ? "VERMELHO" : "AZUL");
        roundFinished = true;
    }
}

function loadButtonsOfTeam(team) {
    const collection = document.getElementsByClassName(`add${team}`);

    for (let i=0; i < collection.length; i++) {
        const element = collection[i];
        
        element.addEventListener('click', function(){
            const amount = parseInt(element.innerHTML.substring(1));
            increment(team, amount);
            updateVisuals();
        });
    }
}
loadButtonsOfTeam("red");
loadButtonsOfTeam("blue");

document.getElementById("reset").addEventListener("click", function(ev){
    points.red = 0;
    points.blue = 0;
    roundFinished = false;
    wintext.style.opacity = "0";
    updateVisuals();
})