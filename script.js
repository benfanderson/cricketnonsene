function makeSlogan() {

    const firstArray = ["ELITE", "FAIR DINKUM", "AUSSIE", "WORLD CLASS", "ULTIMATE", "HOLISTIC", "ABSOLUTE", "UNIQUE"];

    const secondArray = ["PRIDE", "EFFORT", "GUTS", "MATESHIP", "HONESTY", "ATTITUDE", "GOALS", "SYNERGY"];

    const rand1 = Math.floor(Math.random()*firstArray.length);

    const rand2 = Math.floor(Math.random()*secondArray.length);
    
    const headlineWords = document.getElementById('words');
    headlineWords.innerHTML = firstArray[rand1] + " " + secondArray[rand2];
    }
    function init() {
        makeSlogan();
        sloganButton = document.getElementById("sloganButton");
        sloganButton.onclick = makeSlogan;
    }
window.onload = init;