const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "The Hague Netherlands",
        location: "Zoetermeer, Netherlands",
        dedicated: "2002, September, 2",
        area: 10500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-hague-netherlands/2019/400x250/1-hague-netherlands-temple-2196995.jpg"
    },
    {
        templeName: "Kyiv Ukraine",
        location: "Kyivs'ka Oblast, Ukraine",
        dedicated: "2010, August, 29",
        area: 22184,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-lds-774302-wallpaper.jpg"
    },
    {
        templeName: "London England",
        location: "Newchapel Surrey, England",
        dedicated: "1993, October, 18",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-650239-wallpaper.jpg"
    },
    {
      templeName: "Paris France",
      location: "Le Chesnay, France",
      dedicated: "2017, May, 21",
      area: 44175,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple02.jpg"
    },
    {
      templeName: "Preston England",
      location: "Lancashire, England",
      dedicated: "1998, June, 7",
      area: 69630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/preston-england/400x250/preston-temple-765118-wallpaper.jpg"
    },
    {
      templeName: "Raleigh North Carolina",
      location: "Apex, United States",
      dedicated: "1999, December, 18",
      area: 12864,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/raleigh-north-carolina/400x250/1-1f1daf252144e68f95bf3b56d59479cbefbe02c8.jpeg"
    },
    {
      templeName: "Fukuoka Japan",
      location: "Fukuoka, Japan",
      dedicated: "2000, June, 11",
      area: 10700,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
    },
    {
      templeName: "Colonia Juárez Chihuahua Mexico",
      location: "Colonia Juárez, Chihuahua Mexico",
      dedicated: "1999, March, 6",
      area: 6800,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/400x250/colonia-juarez-chihuahua-mexico-temple-1543027-wallpaper.jpg"
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