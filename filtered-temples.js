const temples = [
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836-03-27",
    area: 15000,
    imageUrl: "../images/kirtland-temple-ohio-usa.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893-04-06",
    area: 253000,
    imageUrl: "../images/salt-lake-temple-utah-usa.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, United States",
    dedicated: "1919-11-27",
    area: 42100,
    imageUrl: "../images/laie-hawaii-temple-usa.jpg"
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah, United States",
    dedicated: "2016-03-20",
    area: 85000,
    imageUrl: "../images/provo-city-center-temple-utah.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    imageUrl: "../images/rome-italy-temple.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "../images/paris-france-temple.jpg"
  },
  {
    templeName: "Hong Kong China Temple",
    location: "Hong Kong, China",
    dedicated: "1996-05-26",
    area: 22000,
    imageUrl: "../images/hong-kong-china-temple.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 100000,
    imageUrl: "../images/manti-utah-temple.jpg"
  },
  {
    templeName: "Boston Massachusetts Temple",
    location: "Belmont, Massachusetts, United States",
    dedicated: "2000-10-01",
    area: 69000,
    imageUrl: "../images/boston-massachusetts-temple.jpg"
  }
];

const container = document.querySelector("#temples");

function displayTemples(templeList) {
  container.innerHTML = "";
  templeList.forEach(temple => {
    const card = document.createElement("article");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// Navigation Filters
document.querySelector("#home").addEventListener("click", () => {
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area < 10000));
});

// Footer info
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Initial load
displayTemples(temples);
