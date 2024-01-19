async function getData() {
    var resp = await fetch("http://localhost:3000/cities");
    var json = await resp.json();
    return json;
}

function exA(json) {
    let data = json;

    let result = "";
    let filteredData = data.filter(function (tag) {
        return tag.province === "małopolskie";
    });

    for (let i = 0; i < Object.keys(filteredData).length; i++) {
        result += filteredData[i].name + " ";
    }
    
    document.getElementById("answerA").innerHTML = result;
}

function exB(json) {
    let data = json;

    let result = "";
    let filteredData = data.filter(function (tag) {

        let count = 0;

        for(let i = 0; i < tag.name.length; i++) {
            letter = tag.name.charAt(i)
            if (letter == 'A' || letter == 'a') count++;
            if (count == 2) return true;
        }
        return false;
    });

    for (let i = 0; i < Object.keys(filteredData).length; i++) {
        result += filteredData[i].name + " ";
    }

    document.getElementById("answerB").innerHTML = result;
}

function exC(json) {
    let data = json;

    let result = new Array;
    for (let i = 0; i < Object.keys(data).length; i++) {
        result.push([data[i].name, data[i].people / data[i].area]);
    }
    result.sort(function (a, b) {
        if (a[1] < b[1])
            return 1
        else if (a[1] > b[1])
            return -1
        return 0
    });

    document.getElementById("answerC").innerHTML = result[4][0];
}

function exD(json) {
    let data = json;

    let result = "";
    let filteredData = data.filter(function (tag) {
        return tag.people > 100000;
    });
    for (let i = 0; i < Object.keys(filteredData).length; i++) {
        result += filteredData[i].name + "-city ";
    }

    document.getElementById("answerD").innerHTML = result;
}

function exE(json) {
    let data = json;

    let below = 0;
    let above = 0;
    for (let i = 0; i < Object.keys(data).length; i++) {
        if (data[i].people > 80000) {
            above++;
        }
        else below++;
    }

    let result = "";
    if (below>above) {
        result = "poniżej";
    }
    else {
        result = "powyżej";
    }

    document.getElementById("answerE").innerHTML = "Miast powyzej: " + above + ", miast ponizej: " + below + ".   Co oznacza, ze wiecej jest miast " + result;
}

function exF(json) {
    let data = json;

    let result = 0;
    let filteredData = data.filter(function (tag) {
        return tag.township.charAt(0) == 'P';
    });

    for(let i = 0; i < Object.keys(filteredData).length; i++) {
        result += filteredData[i].area;
    }
    result /= Object.keys(filteredData).length;

    document.getElementById("answerF").innerHTML = result;
}

function exG(json) {
    let data = json;

    let resultCount = 0;
    let result = "";
    let filteredData = data.filter(function (tag) {
        return tag.province == "pomorskie";
    });

    for(let i = 0; i < Object.keys(filteredData).length; i++) {
        if(filteredData[i].people > 5000) resultCount++;
        else result = "Nie";
    }
    if (result == "") result = "Tak";

    document.getElementById("answerG").innerHTML = "Czy wszystkie miasta z pomorskiego maja wiecej niz 5000 mieszkancow: " + result + ". Liczba miast z liczba powyzej: " + resultCount;
}

async function load() {
    var json = await getData();
    exA(json);
    exB(json);
    exC(json);
    exD(json);
    exE(json);
    exF(json);
    exG(json);
}

load();