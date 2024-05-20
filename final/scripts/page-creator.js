function formatString(str) {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


document.querySelectorAll('.dynamicLink').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const title = this.getAttribute('data-title');
        const titleColor = this.getAttribute('data-title-color');
        const iconColor = this.getAttribute('data-icon-color');

        let newWindow = window.open('', '_blank');

        const customUrl = `${(title)}.html`;

        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>WDD 131 - Warhammer 40,000 Army Builder | ${formatString(title)} - Tymur Pushnoy</title>
                <meta name="author" content="Tymur Pushnoy">
                <meta name="description" content="WDD 131 - Dynamic Web Fundamentals - Final Project - Warhammer 40,000 Army Builder - ${formatString(title)} - Tymur Pushnoy">
                <link rel="stylesheet" href="styles/army-builder.css">
                <script src="scripts/army-builder.js" defer></script>
                <input type="hidden" id="fileDirectory" value="data/${title}-data.json">
            </head>
            <body>
                <header id="headerWE">
                    <img style="${iconColor}" src="images/${title}-icon.svg" alt="">
                    <h1 style="color: ${titleColor};">${(formatString(title)).toUpperCase()}</h1>
                    <img style="${iconColor}" src="images/${title}-icon.svg" alt="">
                </header>
            
                <main>
                    <div id="container">
                        <div id="availableListFrame">
                            <h2>Units</h2>
                            <div id="availableList">
                                <div id="EpicHero"><h3>Epic Hero</h3></div>
                                <div id="Character"><h3>Character</h3></div>
                                <div id="Battleline"><h3>Battleline</h3></div>
                                <div id="Infantry"><h3>Infantry</h3></div>
                                <div id="Mounted"><h3>Mounted</h3></div>
                                <div id="Beast"><h3>Beast</h3></div>
                                <div id="Monster"><h3>Monster</h3></div>
                                <div id="Vehicle"><h3>Vehicle</h3></div>
                                <div id="DedicatedTransport"><h3>Dedicated Transport</h3></div>
                            </div>
                        </div>
            
                        <div id="userListFrame">
                            <h2>Your List</h2>
                            <p id="totalCost">Total Cost: 0</p>
                            <div id="userList">
                                <div id="uEpicHero"><h3>Epic Hero</h3></div>
                                <div id="uCharacter"><h3>Character</h3></div>
                                <div id="uBattleline"><h3>Battleline</h3></div>
                                <div id="uInfantry"><h3>Infantry</h3></div>
                                <div id="uMounted"><h3>Mounted</h3></div>
                                <div id="uBeast"><h3>Beast</h3></div>
                                <div id="uMonster"><h3>Monster</h3></div>
                                <div id="uVehicle"><h3>Vehicle</h3></div>
                                <div id="uDedicatedTransport"><h3>Dedicated Transport</h3></div>
                            </div>
                        </div>
                    </div>
                </main>
            
                <footer>
            
                </footer>
            </body>
            </html>
        `);

        newWindow.history.pushState({}, '', customUrl);

        newWindow.document.close();
    });
});
