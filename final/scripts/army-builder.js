const availableUnitsList = document.querySelector(`#availableList`);
const userUnitsList = document.querySelector(`#userList`);
const totalCostDisplay = document.querySelector(`#totalCost`);
let unitsData = [];
let totalCost = 0;



const getData = async () => {

    const response = await fetch((document.querySelector("#fileDirectory")).value);
    unitsData = await response.json();
    displayUnits(unitsData);
}



const displayUnits = (units) => {
    units.forEach(unit => {

        const article = document.createElement(`article`);

        const h3name = document.createElement(`h3`);
        h3name.textContent = unit.name;

        const img = document.createElement(`img`);
        img.src = unit.image;
        img.alt = unit.name;

        const h4limit = document.createElement(`h4`);
        h4limit.textContent = `Max: ${unit.limit}`;

        const h4cost = document.createElement(`h4`);
        h4cost.textContent = unit.cost;

        const button = document.createElement(`input`)
        button.value = `+`
        button.type = `button`

        button.addEventListener(`click`, () => {
            addUserUnit(unit);
        });

        article.appendChild(img);
        article.appendChild(h3name);
        article.appendChild(h4limit);
        article.appendChild(h4cost);
        article.appendChild(button);

        document.querySelector(`#${unit.type}`).appendChild(article);

    });
};



const addUserUnit = (unit) => {

    const existingUnit = findUserUnit(unit);

    if (existingUnit) {

        if (existingUnit.value < unit.limit) {
            existingUnit.value++;
            existingUnit.article.querySelector(`#count`).textContent = `x${existingUnit.value}`;

            totalCost += unit.cost;
            totalCostDisplay.textContent = `Total Cost: ${totalCost}`;

            if (existingUnit.value == unit.limit) {
                changeBoxRed(unit);
            }
        }

    } else {

        const article = document.createElement(`article`);

        const h3name = document.createElement(`h3`);
        h3name.textContent = unit.name;

        const img = document.createElement(`img`);
        img.src = unit.image;
        img.alt = unit.name;

        const h4count = document.createElement(`h4`);
        h4count.textContent = `x1`
        h4count.id = `count`
        article.value = 1;

        const h4cost = document.createElement(`h4`);
        h4cost.textContent = unit.cost;

        const button = document.createElement(`input`)
        button.value = `-`
        button.type = `button`

        button.addEventListener(`click`, () => {
            
            const existingUnit = findUserUnit(unit);

            if (existingUnit.value > 1) {

                existingUnit.value--;
                existingUnit.article.querySelector(`#count`).textContent = `x${existingUnit.value}`;

                totalCost -= unit.cost;
                totalCostDisplay.textContent = `Total Cost: ${totalCost}`;

            } else {
                article.remove();
                totalCost -= unit.cost;
                totalCostDisplay.textContent = `Total Cost: ${totalCost}`;
            }

            changeBoxGrey(unit);
        });

        article.appendChild(img);
        article.appendChild(h3name);
        article.appendChild(h4count);
        article.appendChild(h4cost);
        article.appendChild(button);

        document.querySelector(`#u${unit.type}`).appendChild(article);

        totalCost += unit.cost;
        totalCostDisplay.textContent = `Total Cost: ${totalCost}`;

        if (unit.limit === 1) {
            changeBoxRed(unit);
        }
    }
}



const findUserUnit = (unit) => {
    const unitArticles = userUnitsList.querySelectorAll(`article`);
    for (const unitArticle of unitArticles) {
        const nameElement = unitArticle.querySelector(`h3`);
        if (nameElement.textContent === unit.name) {
            return {
                article: unitArticle,
                value: parseInt(unitArticle.querySelector(`#count`).textContent.replace(`x`, ``))
            };
        }
    }
    return null;
};



const changeBoxRed = (unit) => {

    const availableUnitArticle = findAvailableUnitArticle(unit);

    if (availableUnitArticle) {
        availableUnitArticle.style.backgroundColor = `red`;
    }
};

const changeBoxGrey = (unit) => {

    const availableUnitArticle = findAvailableUnitArticle(unit);

    if (availableUnitArticle) {
        availableUnitArticle.style.backgroundColor = `#bbbbbb`;
    }
};

const findAvailableUnitArticle = (unit) => {
    const unitArticles = availableUnitsList.querySelectorAll(`article`);
    for (const unitArticle of unitArticles) {
        const nameElement = unitArticle.querySelector(`h3`);
        if (nameElement.textContent === unit.name) {
            return unitArticle;
        }
    }
    return null;
};



getData();