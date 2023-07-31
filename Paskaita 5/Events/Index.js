const par = document.querySelector("p");

par.addEventListener("click", () => {
    console.log("Paspaudėte and paragrafo");
});

function sayHello() {
    console.log("Hello");
}

const input = document.querySelector("#inputField");

input.addEventListener("input", logSomething);

function logSomething(e) {
    input.removeEventListener("input", logSomething);
    console.log(e.target.value);
}
