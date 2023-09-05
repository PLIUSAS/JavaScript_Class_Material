const host = "http://localhost:3000/people";

async function getPeople() {
  try {
    const response = await fetch(host);
    if (response.ok) {
      const people = await response.json();
      console.log(people);
    } else {
      console.log("something wrong");
    }
  } catch (error) {
    console.log(error);
  }
}
getPeople();

async function postNewPerson() {
  try {
    const response = await fetch(host, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Naujas Zmogus",
        age: 50,
      }),
    });
    if (resposnse.ok) {
      alert("Naujas Zmogus");
    } else {
      alert("Kazkas nepavyko");
    }
  } catch (error) {
    console.log(error);
  }
}
postNewPerson();

async function deleteById() {
  const response = await fetch("http://localhost:3000/people/", {
    method: "DELETE",
  });
  if (response.ok) {
    alert("Istryne");
  } else {
    alert("kazkas negerai");
  }
}
deleteById();
