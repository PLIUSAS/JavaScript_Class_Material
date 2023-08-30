const tbody = document.querySelector("tbody");
const pError = document.querySelector("p");
const buttonGet = document.querySelector("button");

buttonGet.addEventListener("click", getPeople);

async function getPeople() {
  const requestToBackend = new Promise((resolve, reject) => {
    const peopleArray = [
      { id: 1, name: "John", age: 25 },
      { id: 2, name: "Emily", age: 30 },
      { id: 3, name: "Michael", age: 22 },
      { id: 4, name: "Sarah", age: 28 },
      { id: 5, name: "David", age: 35 },
    ];
    setTimeout(() => {
      resolve(peopleArray);
      // reject("Error");
    }, 2000);
  });
  try {
    buttonGet.disabled = true;
    const people = await requestToBackend;
    tbody.innerHTML = "";

    people.forEach((person) => {
      const tr = document.createElement("tr");

      const tdId = document.createElement("td");
      tdId.textContent = person.id;
      const tdName = document.createElement("td");
      tdName.textContent = person.name;
      const tdAge = document.createElement("td");
      tdAge.textContent = person.age;

      tr.append(tdId, tdName, tdAge);
      tbody.append(tr);
    });
    console.log(people);
  } catch (error) {
    pError.textContent = error;
    console.log(error);
  }

  buttonGet.disabled = false;
}
