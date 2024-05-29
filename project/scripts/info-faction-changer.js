document.addEventListener("DOMContentLoaded", function() {
    const factionSelect = document.getElementById("factionSelect");
    const infoRows = document.querySelectorAll(".infoRow");

    function updateVisibility() {
        const screenWidth = window.innerWidth;
      
        // Check if a faction is currently selected
        const selectedFactionId = factionSelect.value;
        const selectedFactionElement = document.getElementById(selectedFactionId);
      
        if (screenWidth < 700) {
            infoRows.forEach(row => {
                if (!selectedFactionElement || row.id !== selectedFactionId) {
                    row.setAttribute('hidden', true);
                }
            });
        } else {
            infoRows.forEach(row => {
                row.removeAttribute('hidden');
            });
        }
    }
    

    function handleFactionSelection() {
        const selectedFactionId = factionSelect.value;
        console.log("Selected faction ID:", selectedFactionId);
        // Hide all infoRow elements
        console.log("Hiding all infoRow elements");
        infoRows.forEach(row => row.setAttribute('hidden', true));
        // Show the selected faction if it exists
        const selectedFactionElement = document.getElementById(selectedFactionId);
        console.log("Selected faction element:", selectedFactionElement);
        if (selectedFactionElement) {
            console.log("Removing 'hidden' attribute from selected faction element");
            selectedFactionElement.removeAttribute('hidden');
            console.log("Selected faction element shown:", selectedFactionElement);
        } else {
            console.log("Selected faction element not found.");
        }
    }
    
    

    factionSelect.addEventListener("change", handleFactionSelection);

    // Trigger visibility update on load and on window resize
    updateVisibility();
    window.addEventListener("resize", updateVisibility);
});