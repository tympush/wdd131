const factionList = ["Adeptus Custodes", "Ultramarines", "Dark Angels", "Blood Angels", "Space Wolves", "Imperial Knights", "World Eaters", "Death Guard", "Thousand Sons", "Chaos Knights", "Necrons"];

const tWin1 = document.querySelector(`#tournamentWinrateBox .stat1`);
const tWin2 = document.querySelector(`#tournamentWinrateBox .stat2`);
const tWin3 = document.querySelector(`#tournamentWinrateBox .stat3`);

const tPick1 = document.querySelector(`#tournamentPickrateBox .stat1`);
const tPick2 = document.querySelector(`#tournamentPickrateBox .stat2`);
const tPick3 = document.querySelector(`#tournamentPickrateBox .stat3`);

const gWin1 = document.querySelector(`#globalWinrateBox .stat1`);
const gWin2 = document.querySelector(`#globalWinrateBox .stat2`);
const gWin3 = document.querySelector(`#globalWinrateBox .stat3`);

const gPick1 = document.querySelector(`#globalPickrateBox .stat1`);
const gPick2 = document.querySelector(`#globalPickrateBox .stat2`);
const gPick3 = document.querySelector(`#globalPickrateBox .stat3`);

const getRandomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const GetStats = (stat1, stat2, stat3, min, max) => {
    let randomNumbersList = [];

    for (let i = 0; i < 3; i++) {
        let randomNumber = getRandomNumberInRange(min, max);
        randomNumbersList.push(randomNumber);
    }

    randomNumbersList.sort();

    let randomFactionsList = [];

    while (randomFactionsList.length < 3) {
        let randomIndex = Math.floor(Math.random() * factionList.length);
        let selectedFaction = factionList[randomIndex];

        if (!randomFactionsList.includes(selectedFaction)) {
          randomFactionsList.push(selectedFaction);
        }
    }

    stat1.textContent = `${randomFactionsList[2]} - ${randomNumbersList[2]}%`
    stat2.textContent = `${randomFactionsList[1]} - ${randomNumbersList[1]}%`
    stat3.textContent = `${randomFactionsList[0]} - ${randomNumbersList[0]}%`
}

GetStats(tWin1, tWin2, tWin3, 45, 60)
GetStats(tPick1, tPick2, tPick3, 10, 20)
GetStats(gWin1, gWin2, gWin3, 45, 60)
GetStats(gPick1, gPick2, gPick3, 5, 20)



document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();

    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formattedTime = now.toLocaleTimeString('en-GB', options);

    const dataUpdatedElements = document.querySelectorAll('.dataUpdated');

    dataUpdatedElements.forEach(element => {
        element.textContent = `Data Updated: ${formattedTime}`;
    });
});



const factionForm = document.querySelector(`#faction`);

factionList.forEach(faction => {
    const option = document.createElement("option");
    option.textContent = faction;
    factionForm.appendChild(option);
});