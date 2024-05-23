const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

productWindow = document.querySelector("#productName")

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = capitalizeWords(product.name);
    productWindow.appendChild(option);
});

/*const button = document.querySelector("#submit");

button.addEventListener('click', () => {
    let reviewCount = localStorage.getItem("reviewCount");
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }

    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);
});*/