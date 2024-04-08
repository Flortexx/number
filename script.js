function calculateAverage() {
    const numbersInput = document.getElementById("averageInput").value;
    const numbersArray = numbersInput.split(",").map(Number);
    const average = numbersArray.reduce((acc, curr) => acc + curr, 0) / numbersArray.length;
    document.getElementById("averageOutput").value = average;
}

function findMinMax() {
    const numbersInput = document.getElementById("minMaxInput").value;
    const numbersArray = numbersInput.split(",").map(Number);
    const maxNumber = Math.max(...numbersArray);
    const minNumber = Math.min(...numbersArray);
    document.getElementById("minOutput").value = minNumber;
    document.getElementById("maxOutput").value = maxNumber;
}

function changeCase(type) {
    let string = document.getElementById("caseInput").value;
    if (type === "uppercase") {
        document.getElementById("caseOutput").value = string.toUpperCase();
    } else if (type === "lowercase") {
        document.getElementById("caseOutput").value = string.toLowerCase();
    }
}

function combineArrays() {
    const array1Input = document.getElementById("combineInput1").value;
    const array2Input = document.getElementById("combineInput2").value;
    const array1 = array1Input.split(",").map(Number);
    const array2 = array2Input.split(",").map(Number);
    const combinedArray = array1.concat(array2);
    document.getElementById("combineOutput").value = combinedArray.join(",");
}

function createObject() {
    const animals = {
        "dogs": 5,
        "cats": 3,
        "birds": 2
    };
    document.getElementById("objectOutput").value = JSON.stringify(animals);
}

function checkExistence() {
    const setInput = document.getElementById("setInput").value;
    const setArray = setInput.split(",").map(Number);
    const set = new Set(setArray);
    const elementToCheck = parseInt(document.getElementById("elementToCheck").value);
    const exists = set.has(elementToCheck);
    document.getElementById("existenceOutput").value = exists ? "Existuje" : "Neexistuje";
}