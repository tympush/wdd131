const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "images/filtered-temples/aba-nigeria.webp"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "images/filtered-temples/manti-utah.webp"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "images/filtered-temples/payson-utah.webp"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "images/filtered-temples/yigo-guam.webp"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "images/filtered-temples/washington-dc.webp"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "images/filtered-temples/lima-peru.webp"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "images/filtered-temples/mexico-city-mexico.webp"
    },
    {
      templeName: "The Hague Netherlands",
      location: "Zoetermeer, Netherlands",
      dedicated: "2002, September, 2",
      area: 10500,
      imageUrl: "images/filtered-temples/the-hague-netherlands.webp"
    },
    {
      templeName: "Kyiv Ukraine",
      location: "Kyivs'ka Oblast, Ukraine",
      dedicated: "2010, August, 29",
      area: 22184,
      imageUrl: "images/filtered-temples/kyiv-ukraine.webp"
    },
    {
      templeName: "London England",
      location: "Newchapel Surrey, England",
      dedicated: "1993, October, 18",
      area: 116642,
      imageUrl: "images/filtered-temples/london-england.webp"
    },
    {
      templeName: "Paris France",
      location: "Le Chesnay, France",
      dedicated: "2017, May, 21",
      area: 44175,
      imageUrl: "images/filtered-temples/paris-france.webp"
    },
    {
      templeName: "Preston England",
      location: "Lancashire, England",
      dedicated: "1998, June, 7",
      area: 69630,
      imageUrl: "images/filtered-temples/preston-england.webp"
    },
    {
      templeName: "Raleigh North Carolina",
      location: "Apex, United States",
      dedicated: "1999, December, 18",
      area: 12864,
      imageUrl: "images/filtered-temples/releigh-north-carolina.webp"
    },
    {
      templeName: "Fukuoka Japan",
      location: "Fukuoka, Japan",
      dedicated: "2000, June, 11",
      area: 10700,
      imageUrl: "images/filtered-temples/fukuoka-japan.webp"
    },
    {
      templeName: "Colonia Juárez Chihuahua Mexico",
      location: "Colonia Juárez, Chihuahua Mexico",
      dedicated: "1999, March, 6",
      area: 6800,
      imageUrl: "images/filtered-temples/colonia-juarez-chihuahua-mexico.webp"
    }
];


const homeButton = document.querySelector("#homeButton");
const oldButton = document.querySelector("#oldButton");
const newButton = document.querySelector("#newButton");
const largeButton = document.querySelector("#largeButton");
const smallButton = document.querySelector("#smallButton");

homeButton.addEventListener("click", () => {
  createTempleCards(temples)
});

oldButton.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900))
});

newButton.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000))
});

largeButton.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => temple.area > 90000))
});

smallButton.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => temple.area < 10000))
});


const templeContainer = document.getElementById("templeContainer");

function createTempleCards(filteredTemples) {
  templeContainer.innerHTML = "";

  filteredTemples.forEach((temple) => {
      const templeCard = document.createElement("figure");
      templeCard.classList.add("templeCard");

      const name = document.createElement("h3");
      name.textContent = temple.templeName;
      templeCard.appendChild(name);

      const location = document.createElement("figcaption");
      location.textContent = `Location: ${temple.location}`;
      templeCard.appendChild(location);

      const dedicated = document.createElement("figcaption");
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
      templeCard.appendChild(dedicated);

      const area = document.createElement("figcaption");
      area.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;
      templeCard.appendChild(area);

      const templeImage = document.createElement("img");
      templeImage.src = temple.imageUrl;
      templeImage.alt = temple.templeName;
      templeImage.loading = "lazy";
      templeImage.width = 400;
      templeImage.height = 250;
      templeCard.appendChild(templeImage);

      templeContainer.appendChild(templeCard);
  });
}


const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const title = document.querySelector(".headerTitle");
const header = document.querySelector("header");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
    title.classList.toggle("hidden");
    header.classList.toggle("active");
});


createTempleCards(temples);