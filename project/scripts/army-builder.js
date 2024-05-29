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
};

const displayUnits = (units) => {
    units.forEach(unit => {
        numUnits += 1;
        unit.currentCount = 0;

        const article = document.createElement(`article`);

        const h3name = document.createElement(`h4`);
        h3name.textContent = unit.name;

        const img = document.createElement(`img`);
        img.src = unit.image;
        img.alt = unit.name;
        img.loading = "lazy";

        const h4count = document.createElement(`h4`);
        const spanCount = document.createElement(`span`);
        spanCount.textContent = `${unit.currentCount}/${unit.limit}`;
        spanCount.id = `count`;
        h4count.appendChild(spanCount);

        const h4cost = document.createElement(`h4`);
        h4cost.textContent = unit.cost;

        article.appendChild(img);
        article.appendChild(h3name);
        article.appendChild(h4count);
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
            document.querySelector("#myButton").textContent = `My List (${userUnitsCount})`;

            unit.currentCount++;
            updateAvailableUnitCount(unit);

            if (existingUnit.value == unit.limit) {
                changeBoxRed(unit);
                existingUnit.article.querySelector("h4:nth-child(3)").style.color = "green";
                findAvailableUnitArticle(unit).classList.add("disabled");
            }
        }
    } else {
        const article = document.createElement(`article`);

        const h3name = document.createElement(`h4`);
        h3name.textContent = unit.name;

        const img = document.createElement(`img`);
        img.src = unit.image;
        img.alt = unit.name;
        img.loading = "lazy";

        const h4count = document.createElement(`h4`);
        const spanCount = document.createElement(`span`);
        spanCount.textContent = `1/${unit.limit}`;
        spanCount.id = `count`;
        h4count.appendChild(spanCount);
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
                document.querySelector("#myButton").textContent = `My List (${userUnitsCount})`;

                unit.currentCount--;
                updateAvailableUnitCount(unit);

                if (existingUnit.value < unit.limit) {
                    existingUnit.article.querySelector("h4:nth-child(3)").style.color = "";
                    findAvailableUnitArticle(unit).classList.remove("disabled");
                }
            } else {
                existingUnit.article.remove();
                totalCost -= unit.cost;
                totalCostDisplay.textContent = `Total Cost: ${totalCost}`;

                userUnitsCount--;
                document.querySelector("#myButton").textContent = `My List (${userUnitsCount})`;

                unit.currentCount--;
                updateAvailableUnitCount(unit);

                findAvailableUnitArticle(unit).classList.remove("disabled");
            }

            changeBoxGrey(unit);
        });

        document.querySelector(`#u${unit.type}`).appendChild(article);

        totalCost += unit.cost;
        totalCostDisplay.textContent = `Total Cost: ${totalCost}`;

        userUnitsCount++;
        document.querySelector("#myButton").textContent = `My List (${userUnitsCount})`;

        unit.currentCount++;
        updateAvailableUnitCount(unit);

        if (unit.limit === 1) {
            changeBoxRed(unit);
            article.querySelector("h4:nth-child(3)").style.color = "green";
            findAvailableUnitArticle(unit).classList.add("disabled");
        }
    }
};

const findUserUnit = (unit) => {
    const unitArticles = userUnitsList.querySelectorAll(`article`);
    for (const unitArticle of unitArticles) {
        const nameElement = unitArticle.querySelector(`h4`);
        if (nameElement.textContent === unit.name) {
            return {
                article: unitArticle,
                value: parseInt(unitArticle.querySelector(`#count`).textContent.split("/")[0])
            };
        }
    }
    return null;
};

const updateAvailableUnitCount = (unit) => {
    const availableUnitArticle = findAvailableUnitArticle(unit);
    if (availableUnitArticle) {
        const spanCount = availableUnitArticle.querySelector(`#count`);
        spanCount.textContent = `${unit.currentCount}/${unit.limit}`;
        if (unit.currentCount === unit.limit) {
            spanCount.style.color = "red";
        } else {
            spanCount.style.color = "";
        }
    }
};

const changeBoxRed = (unit) => {
    const availableUnitArticle = findAvailableUnitArticle(unit);
    if (availableUnitArticle) {
        availableUnitArticle.style.opacity = "0.35";
    }
};

const changeBoxGrey = (unit) => {
    const availableUnitArticle = findAvailableUnitArticle(unit);
    if (availableUnitArticle) {
        availableUnitArticle.style.opacity = "1";
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

    let activeButton = addButton;

    const updateVisibility = () => {
        if (window.innerWidth < 1200) {
            if (activeButton === addButton) {
                availableListFrame.style.display = "block";
                userListFrame.style.display = "none";
            } else {
                availableListFrame.style.display = "none";
                userListFrame.style.display = "block";
            }
        } else {
            availableListFrame.style.display = "block";
            userListFrame.style.display = "block";
        }
    };

    window.addEventListener("resize", updateVisibility);
    updateVisibility();

    const handleButtonClick = (button, showAvailable) => {
        activeButton.classList.remove("highlight");
        button.classList.add("highlight");
        activeButton = button;

        if (showAvailable) {
            availableListFrame.style.display = "block";
            userListFrame.style.display = "none";
        } else {
            availableListFrame.style.display = "none";
            userListFrame.style.display = "block";
        }
        updateVisibility();
    };

    addButton.addEventListener("click", () => handleButtonClick(addButton, true));
    myButton.addEventListener("click", () => handleButtonClick(myButton, false));
});