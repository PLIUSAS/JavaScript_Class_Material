let rows = [];

function createTable() {
  const form = document.createElement("form");
  const searchInput = document.createElement("input");
  searchInput.type = "search";
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Search";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = searchInput.value.trim();
    const filtered = rows.filter((row) =>
      row.name.toLowerCase().includes(search.toLowerCase())
    );
    tbody.innerHTML = "";
    filtered.forEach((row) => {
      generateTableRow(row);
    });
  });

  form.append(searchInput, submitButton);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "vipCheckbox";
  checkbox.addEventListener("change", (e) => {
    tbody.innerHTML = "";
    if (e.target.checked) {
      const vips = rows.filter((row) => row.vip);
      vips.forEach((vip) => {
        generateTableRow(vip);
      });
    } else {
      rows.forEach((row) => {
        generateTableRow(row);
      });
    }
  });

  const label = document.createElement("label");
  label.textContent = "Filter VIP";
  label.setAttribute("for", "vipCheckbox");
  const table = document.createElement("table");
  const tHead = document.createElement("thead");
  const tr = document.createElement("tr");

  const thId = document.createElement("th");
  thId.textContent = "id";
  const thImage = document.createElement("th");
  thImage.textContent = "Image";
  const thName = document.createElement("th");
  thName.textContent = "Name";
  const thLastName = document.createElement("th");
  thLastName.textContent = "Last name";
  const thCity = document.createElement("th");
  thCity.textContent = "City";
  const thFavColor = document.createElement("th");
  thFavColor.textContent = "Favorite Color";

  tr.append(thId, thImage, thName, thLastName, thCity, thFavColor);
  tHead.append(tr);
  table.append(tHead, document.createElement("tbody"));

  document.body.append(form, label, checkbox, table);
}

async function getRobots() {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me/");
    if (response.ok) {
      const robots = await response.json();
      rows = robots;
      robots.forEach((robot) => {
        generateTableRow(robot);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function generateTableRow(data) {
  const fullNameArray = data.name.split(" ");

  const tr = document.createElement("tr");

  const tdId = document.createElement("td");
  tdId.textContent = data.id;
  const tdImage = document.createElement("td");
  const img = document.createElement("img");
  img.src = data.image;
  tdImage.append(img);
  const tdName = document.createElement("td");
  tdName.textContent = fullNameArray[0];
  const tdLastName = document.createElement("td");
  tdLastName.textContent = fullNameArray[1];
  const tdCity = document.createElement("td");
  tdCity.textContent = data.city;
  const tdFavColor = document.createElement("td");
  tdFavColor.textContent = data.fav_color;

  tr.append(tdId, tdImage, tdName, tdLastName, tdCity, tdFavColor);
  tbody.append(tr);
}

createTable();
const tbody = document.querySelector("tbody");
getRobots();
