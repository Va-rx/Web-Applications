document.getElementById('reset').addEventListener('click', resetPoints);
document.getElementById('propagation').addEventListener('click', changePropagation);
document.getElementById('order').addEventListener('click', changeOrder);

document.getElementById('div1').addEventListener('click', addPoints1);
document.getElementById('div2').addEventListener('click', addPoints2);
document.getElementById('div3').addEventListener('click', addPoints3);


let score = 0;
let count = 0;
let changed = 0;


function addPoints1() {
    score += 1;
    showPoints();
    printInfo(1)
    checkIfDisable();

    if(document.getElementById('propagation').innerHTML == 'Propagation: OFF') {
        event.stopPropagation();
    }
    else {
        event.preventDefault();
    }
}

function addPoints2() {
    score += 2;
    showPoints();
    printInfo(2)
    checkIfDisable();

    if(document.getElementById('propagation').innerHTML == 'Propagation: OFF') {
        event.stopPropagation();
    }
    else {
        event.preventDefault();
    }

}

function addPoints3() {
    score += 3;
    showPoints();
    printInfo(3)
    checkIfDisable();

    if(document.getElementById('propagation').innerHTML == 'Propagation: OFF') {
        event.stopPropagation();
    }
    else {
        event.preventDefault();
    }
}

function resetPoints() {
    score = 0;
    count = 0;
    showPoints();
    enableFunction();
    eraseInfo();
}

function showPoints() {
    document.getElementById('points').innerHTML = score;
}

function checkIfDisable() {
    if (score > 30) {
        document.getElementById('div2').removeEventListener('click', addPoints2);
        document.getElementById('div2').removeEventListener('click', addPoints2, true);
        document.getElementById('div2').style.backgroundColor = "gray";
    }
    if (score > 50) {
        document.getElementById('div3').removeEventListener('click', addPoints3);
        document.getElementById('div3').removeEventListener('click', addPoints3, true);
        document.getElementById('div3').style.backgroundColor = "rgb(255, 255, 255)";
    }
}

function enableFunction() {

    if(changed == 0) {
        document.getElementById('div2').addEventListener('click', addPoints2);
        document.getElementById('div3').addEventListener('click', addPoints3);
    }
    else {
        document.getElementById('div2').addEventListener('click', addPoints2, true);
        document.getElementById('div3').addEventListener('click', addPoints3, true);
    }
    document.getElementById('div2').style.backgroundColor = "red";
    document.getElementById('div3').style.backgroundColor = "yellow";
}

function printInfo(x) {
    count++;
    switch(x) {
        case 1:
            document.getElementById('get-info').innerHTML += count + ". Wcisnieto przycisk fioletowy za 1 pkt<br>";
            break;
        case 2:
            document.getElementById('get-info').innerHTML += count + ". Wcisnieto przycisk czerwony za 2 pkt<br>";
            break;
        case 3:
            document.getElementById('get-info').innerHTML += count +". Wcisnieto przycisk żółty za 3 pkt<br>";
            break;
    }
}

function eraseInfo() {
    document.getElementById('get-info').innerHTML = "";
}

function changePropagation() {
    if (document.getElementById('propagation').innerHTML == 'Propagation: ON') {
        document.getElementById('propagation').innerHTML = 'Propagation: OFF';
        return false;
    }
    else {
        document.getElementById('propagation').innerHTML = 'Propagation: ON';
        return true;
    }
}

function changeOrder() {
    if(changed == 0) {
        document.getElementById('div1').removeEventListener('click', addPoints1);
        document.getElementById('div2').removeEventListener('click', addPoints2);
        document.getElementById('div3').removeEventListener('click', addPoints3);
        checkIfDisable();

        document.getElementById('div1').addEventListener('click', addPoints1, true);
        document.getElementById('div2').addEventListener('click', addPoints2, true);
        document.getElementById('div3').addEventListener('click', addPoints3, true);
        changed = 1;
    }
    else {
        document.getElementById('div1').removeEventListener('click', addPoints1, true);
        document.getElementById('div2').removeEventListener('click', addPoints2, true);
        document.getElementById('div3').removeEventListener('click', addPoints3, true);
        checkIfDisable();

        document.getElementById('div1').addEventListener('click', addPoints1);
        document.getElementById('div2').addEventListener('click', addPoints2);
        document.getElementById('div3').addEventListener('click', addPoints3);

        changed = 0;
    }
}
