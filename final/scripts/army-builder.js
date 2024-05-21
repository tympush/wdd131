const availableUnitsList = document.querySelector(`#availableList`);
const userUnitsList = document.querySelector(`#userList`);
const totalCostDisplay = document.querySelector(`#totalCost`);
const numberOfUnitsDisplay = document.querySelector(`#numberOfUnits`);
let unitsData = [];
let totalCost = 0;
let numUnits = 0;
let userUnitsCount = 0;

const getData = async () => {
    const response = await fetch((document.querySelector("#fileDirectory")).value);
    unitsData = await response.json();
    displayUnits(unitsData);
}

const displayUnits = (units) => {
    units.forEach(unit => {
        numUnits += 1;

        const article = document.createElement(`article`);

        const h3name = document.createElement(`h4`);
        h3name.textContent = unit.name;

        const img = document.createElement(`img`);
        img.src = unit.image;
        img.alt = unit.name;

        const h4limit = document.createElement(`h4`);
        h4limit.textContent = `Max: ${unit.limit}`;

        const h4cost = document.createElement(`h4`);
        h4cost.textContent = unit.cost;

        article.appendChild(img);
        article.appendChild(h3name);
        article.appendChild(h4limit);
        article.appendChild(h4cost);

        article.addEventListener(`click`, () => {
            addUserUnit(unit);
        });

        document.querySelector(`#${unit.type}`).appendChild(article);
    });

    numberOfUnitsDisplay.textContent = `Units Available: ${numUnits}`;
};

const addUserUnit = (unit) => {
    const existingUnit = findUserUnit(unit);

    if (existingUnit) {
        if (existingUnit.value < unit.limit) {
            existingUnit.value++;
            existingUnit.article.querySelector(`#count`).textContent = `${existingUnit.value}/${unit.limit}`;

            totalCost += unit.cost;
            totalCostDisplay.textContent = `Total Cost: ${totalCost}`;

            userUnitsCount++;
            document.querySelector('#myButton span').textContent = userUnitsCount;

            if (existingUnit.value == unit.limit) {
                changeBoxRed(unit);
                existingUnit.article.querySelector('h4:nth-child(3)').style.color = 'green';
                findAvailableUnitArticle(unit).classList.add('disabled');
            }
        }
    } else {
        const article = document.createElement(`article`);

        const h3name = document.createElement(`h4`);
        h3name.textContent = unit.name;

        const img = document.createElement(`img`);
        img.src = unit.image;
        img.alt = unit.name;

        const h4count = document.createElement(`h4`);
        h4count.textContent = `1/${unit.limit}`;
        h4count.id = `count`;
        article.value = 1;

        const h4cost = document.createElement(`h4`);
        h4cost.textContent = unit.cost;

        article.appendChild(img);
        article.appendChild(h3name);
        article.appendChild(h4count);
        article.appendChild(h4cost);

        article.addEventListener(`click`, () => {
            const existingUnit = findUserUnit(unit);

            if (existingUnit.value > 1) {
                existingUnit.value--;
                existingUnit.article.querySelector(`#count`).textContent = `${existingUnit.value}/${unit.limit}`;

                totalCost -= unit.cost;
                totalCostDisplay.textContent = `Total Cost: ${totalCost}`;

                userUnitsCount--;
                document.querySelector('#myButton span').textContent = userUnitsCount;

                if (existingUnit.value < unit.limit) {
                    existingUnit.article.querySelector('h4:nth-child(3)').style.color = '';
                    findAvailableUnitArticle(unit).classList.remove('disabled');
                }
            } else {
                existingUnit.article.remove();
                totalCost -= unit.cost;
                totalCostDisplay.textContent = `Total Cost: ${totalCost}`;

                userUnitsCount--;
                document.querySelector('#myButton span').textContent = userUnitsCount;

                findAvailableUnitArticle(unit).classList.remove('disabled');
            }

            changeBoxGrey(unit);
        });

        document.querySelector(`#u${unit.type}`).appendChild(article);

        totalCost += unit.cost;
        totalCostDisplay.textContent = `Total Cost: ${totalCost}`;

        userUnitsCount++;
        document.querySelector('#myButton span').textContent = userUnitsCount;

        if (unit.limit === 1) {
            changeBoxRed(unit);
            article.querySelector('h4:nth-child(3)').style.color = 'green';
            findAvailableUnitArticle(unit).classList.add('disabled');
        }
    }
}




const findUserUnit = (unit) => {
    const unitArticles = userUnitsList.querySelectorAll(`article`);
    for (const unitArticle of unitArticles) {
        const nameElement = unitArticle.querySelector(`h4`);
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
        availableUnitArticle.style.opacity = '0.35';
    }
};

const changeBoxGrey = (unit) => {
    const availableUnitArticle = findAvailableUnitArticle(unit);
    if (availableUnitArticle) {
        availableUnitArticle.style.opacity = '1';
    }
};


const findAvailableUnitArticle = (unit) => {
    const unitArticles = availableUnitsList.querySelectorAll(`article`);
    for (const unitArticle of unitArticles) {
        const nameElement = unitArticle.querySelector(`h4`);
        if (nameElement.textContent === unit.name) {
            return unitArticle;
        }
    }
    return null;
};

getData();

document.addEventListener("DOMContentLoaded", () => {
    const availableListFrame = document.querySelector("#availableListFrame");
    const userListFrame = document.querySelector("#userListFrame");
    const addButton = document.querySelector("#addButton");
    const myButton = document.querySelector("#myButton");

    const updateVisibility = () => {
        if (window.innerWidth < 1200) {
            availableListFrame.style.display = "block";
            userListFrame.style.display = "none";
        } else {
            availableListFrame.style.display = "block";
            userListFrame.style.display = "block";
        }
    };

    window.addEventListener("resize", updateVisibility);
    updateVisibility();

    addButton.addEventListener("click", () => {
        availableListFrame.style.display = "block";
        userListFrame.style.display = "none";
    });

    myButton.addEventListener("click", () => {
        availableListFrame.style.display = "none";
        userListFrame.style.display = "block";
    });
});


const addButton = document.getElementById('addButton');
const myButton = document.getElementById('myButton');

function highlightButton(event) {
    addButton.classList.remove('highlight');
    myButton.classList.remove('highlight');

    event.target.classList.add('highlight');
}

addButton.addEventListener('click', highlightButton);
myButton.addEventListener('click', highlightButton);