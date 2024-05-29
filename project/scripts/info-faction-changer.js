document.addEventListener("DOMContentLoaded", function() {
    const factionSelect = document.getElementById("factionSelect");
    const infoRows = document.querySelectorAll(".infoRow");

    function updateVisibility() {
        const screenWidth = window.innerWidth;
      
        const selectedFactionId = factionSelect.value;
        const selectedFactionElement = document.getElementById(selectedFactionId);
      
        if (screenWidth < 700) {
            infoRows.forEach(row => {
                row.setAttribute('hidden', true);
            });
            handleFactionSelection();
        } else {
            infoRows.forEach(row => {
                row.removeAttribute('hidden');
            });
        }
    }
    
    function handleFactionSelection() {
        const selectedFactionId = factionSelect.value;
    
        infoRows.forEach(row => row.removeAttribute('hidden'));
        infoRows.forEach(row => row.setAttribute('hidden', true));
    
        const selectedFactionElement = document.getElementById(selectedFactionId).parentElement;

        if (selectedFactionElement) {
            selectedFactionElement.removeAttribute('hidden');
        }
    }
    
    factionSelect.addEventListener("change", handleFactionSelection);

    updateVisibility();
    handleFactionSelection();

    window.addEventListener("resize", updateVisibility);
});