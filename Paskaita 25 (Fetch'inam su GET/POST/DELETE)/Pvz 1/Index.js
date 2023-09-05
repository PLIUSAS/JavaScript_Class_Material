const HOST = "http://localhost:3000/people";

const container = document.querySelector(".container");
const form = document.querySelector("#form");

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
