function makeSlogan() {

    const firstArray = ["ELITE", "FAIR DINKUM", "AUSSIE", "WORLD CLASS", "ULTIMATE", "INDOMITABLE"];

    const secondArray = ["PRIDE", "EFFORT", "GUTS", "MATESHIP", "HONESTY", "ATTITUDE"];

    // const array1 = [
    //     {name: 'Gina Rinehart', image: 'gina'},
    //     {name: 'Ben Cousins', image: 'ben'},
    //     {name: 'Quokka', image: 'quokka'},
    //     {name: 'FIFO worker', image: 'fifo'},
    //     {name: 'Sam Kerr', image: 'sam'},
    //     {name: 'Nic Nat', image: 'nicnat'}, 
    //     {name: 'Shark', image: 'shark'}
    // ] ;
    // const array2 = ["gets married", "crashes ute", "takes nude selfie", "filmed making bizzare rant", "sculls stubbie of Emu Export", "named as One Nation candidate"];
    // const array3 = [
    //     {name: 'Elizabeth Quay', image: 'quay'},
    //     {name: 'Royal Show',image: 'show'},
    //     {name: 'Cottesloe Beach', image: 'cott'},
    //     {name: 'Adventure World', image: 'adventure'},
    //     {name: 'Rottnest', image: 'rotto'},
    //     {name: 'Bell Tower', image: 'bell'},
    //     {name: 'Perth Stadium', image: 'stadium'}
    // ];
    const rand1 = Math.floor(Math.random()*firstArray.length);
    const rand2 = Math.floor(Math.random()*secondArray.length);
    // const rand3 = Math.floor(Math.random()*array3.length);
    // const part1 = array1[rand1];
    // const part2 = array2[rand2];
    // const part3 = array3[rand3];
    // const picture1 = document.getElementById("picture1");
    // picture1.src= "images/"+part1.image+".jpg";
    // picture1.alt=part1.name;
    // const picture2 = document.getElementById("picture2");
    // picture2.src= "images/"+part3.image+".jpg";
    // picture2.alt=part3.name;
    const headlineWords = document.getElementById('words');
    headlineWords.innerHTML = firstArray[rand1] + " " + secondArray[rand2];
    }
    function init() {
        makeSlogan();
        sloganButton = document.getElementById("sloganButton");
        sloganButton.onclick = makeSlogan;
    }
window.onload = init;