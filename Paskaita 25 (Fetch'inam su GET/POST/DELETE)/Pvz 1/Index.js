const HOST = "http://localhost:3000/people";
const HOSTER = "https://sophisticated-humane-dandelion.glitch.me";
const container = document.querySelector(".container");
const form = document.querySelector("#form");
const containertest = document.querySelector(".container-test");
const producte = document.querySelector(".add-product");

async function fetchPeople() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const people = await response.json();
      people.forEach((person) => {
        generatePersonCard(person);
      });
    } else {
      alert("Failed to fetch people");
    }
  } catch (error) {
    alert("Something went wrong");
  }
}
async function fetchproduct() {
  try {
    const response = await fetch(HOSTER);
    if (response.ok) {
      const product = await response.json();
      product.forEach((product) => {
        generateProductCard(product);
      });
    } else {
      alert("Failed to fetch people");
    }
  } catch (error) {
    alert("Something went wrong");
  }
}
fetchproduct();

function generateProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");
  const pImage = document.createElement("img");
  pImage.src = product.image;
  const pTitle = document.createElement("p");
  pTitle.textContent = product.title;
  const pPrice = document.createElement("p");
  pPrice.classList.add("price");
  pPrice.textContent = product.price;
  const DeleteButton = document.createElement("button");
  DeleteButton.type = "submit";
  DeleteButton.textContent = "DELETE";
  DeleteButton.addEventListener("click", async () => {
    try {
      const response = await fetch(HOSTER + `/${product.id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // e.target.parentElement.remove(); // Pirmas budas korteles istrynimas rankiniu budu
        card.remove(); // Lengvesnis budas Kortelės istrynimas kadangi jinai yra sukurta šitoj pačioj funkcijoj.
      } else {
        alert("Failed to delete person");
      }
    } catch (error) {
      console.log(error);
    }
  });

  card.append(pImage, pTitle, pPrice, DeleteButton);
  containertest.append(card);
}

function generatePersonCard(person) {
  const card = document.createElement("div");
  card.classList.add("card");

  const pName = document.createElement("p");
  pName.textContent = person.name;
  const pAge = document.createElement("p");
  pAge.textContent = person.age;
  const DeleteButton = document.createElement("button");
  DeleteButton.textContent = "DELETE";
  DeleteButton.addEventListener("click", async () => {
    try {
      const response = await fetch(HOST + `/${person.id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // e.target.parentElement.remove(); // Pirmas budas korteles istrynimas rankiniu budu
        card.remove(); // Lengvesnis budas Kortelės istrynimas kadangi jinai yra sukurta šitoj pačioj funkcijoj.
      } else {
        alert("Failed to delete person");
      }
    } catch (error) {
      console.log(error);
    }
  });

  card.append(pName, pAge, DeleteButton);

  container.append(card);
}

function addProduct() {
  const productTable = document.createElement("div");
  productTable.className = "add-product-table";
  const Pname = document.createElement("h1");
  Pname.textContent = "Pridėti prekę";
  const Pimage = document.createElement("Input");
  Pimage.placeholder = "image";
  Pimage.type = "text";
  Pimage.id = "image";
  const Ptitle = document.createElement("Input");
  Ptitle.placeholder = "title";
  Ptitle.type = "text";
  Ptitle.id = "title";
  const Pprice = document.createElement("Input");
  Pprice.placeholder = "price";
  Pprice.type = "Number";
  Price.id = "price";

  const addproduct = createElement("Button");
  addproduct.textContent = "Add product";

  addproduct.addEventListener("click", async () => {
    try {
      const image = Pimage.value;
      const title = Ptitle.value;
      const price = Pprice.value;
      const response = await fetch(HOSTER, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          image,
          title,
          price,
        }),
      });
      if (response.ok) {
        const product = await response.json();
        generatePersonCard([image, title, price]);
      } else {
        alert("It didn't work");
      }
    } catch (error) {
      alert(error);
    }
  });

  producte.append(productTable);
  productTable.append(Pname, Pimage, Ptitle, Pprice, addproduct);
}
addProduct();

function generarteForm() {
  // Name su label ir input
  const LabelName = document.createElement("label");
  LabelName.textContent = "Name";
  LabelName.setAttribute = ("for", "name");
  const InputName = document.createElement("Input");
  InputName.type = "text";
  InputName.id = "name";

  // Age su label ir input
  const LabelAge = document.createElement("label");
  LabelAge.textContent = "Age";
  LabelAge.setAttribute = ("for", "age");
  const InputAge = document.createElement("Input");
  InputAge.type = "text";
  InputAge.id = "age";

  // Button su submit textu
  const submitButton = document.createElement("button");
  submitButton.textContent = "submit";

  submitButton.addEventListener("click", async () => {
    try {
      const name = InputName.value;
      const age = InputAge.value;
      const response = await fetch(HOST, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
        }),
      });
      if (response.ok) {
        const person = await response.json();
        generatePersonCard([name, age, person.id]);
      } else {
        alert("It didn't work");
      }
    } catch (error) {
      alert(error);
    }
  });

  // Visus sudedam į form ir padarom kad pasirodytu.
  form.append(
    LabelName,
    InputName,
    document.createElement("br"),
    LabelAge,
    InputAge,
    document.createElement("br"),
    submitButton
  );
}
generarteForm(); // Iškvieciam funkcija jog pasirodytu forma puslapyje.

// fetchPeople();
