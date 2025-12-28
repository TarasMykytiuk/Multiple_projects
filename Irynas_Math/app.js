function setup() {
    const form = document.getElementById("examples_form");
    const addInp = document.getElementById("addition");
    const subInp = document.getElementById("subtraction");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const addQuantity = addInp.value;
        const subQuantity = subInp.value;
        generateAdditionExamples(addQuantity);
        generateSubtractionExamples(addQuantity);
    });
}

function generateAdditionExamples(addQuantity) {
    const addCont = document.getElementById("add_container");
    addCont.textContent = "";
    for (let i = 0; i < addQuantity; i++) {
        const numOne = getRandomInt(100, 1000);
        const numTwo = getRandomInt(100, 1000);
        renderExampleCard(numOne, numTwo, "+", addCont);
    }
}

function generateSubtractionExamples(addQuantity) {
    const subCont = document.getElementById("sub_container");
    subCont.textContent = "";
    for (let i = 0; i < addQuantity; i++) {
        const numOne = getRandomInt(100, 1000);
        const numTwo = getRandomInt(100, numOne);
        renderExampleCard(numOne, numTwo, "-", subCont);
    }
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    // The maximum is exclusive and the minimum is inclusive
}

function renderExampleCard(numOne, numTwo, sign, containerDom) {
    const div = document.createElement("div");
    div.classList = "example_card";
    const pOne = document.createElement("p");
    pOne.textContent = numOne;
    pOne.classList = "box_1";
    const pSign = document.createElement("p");
    pSign.textContent = sign;
    pSign.classList = "box_2";
    const pTwo = document.createElement("p");
    pTwo.textContent = numTwo;
    pTwo.classList = "box_3"
    div.appendChild(pOne);
    div.appendChild(pSign);
    div.appendChild(pTwo);
    containerDom.appendChild(div);
}

window.onload = setup;