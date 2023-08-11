const todos = [
  { text: "Buy groceries", completed: false },
  { text: "Finish homework", completed: true },
  { text: "Go for a run", completed: false },
  { text: "Call a friend", completed: false },
  { text: "Read a book", completed: true },
];

const ul = document.querySelector("ul");
const newTodoInput = document.querySelector("#todoInput");
const addButton = document.querySelector("button");
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;

  const filterTodos = [];

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].text.includes(value)) {
      filterTodos.push(todos[i]);
    }
  }
  generateTodas(filterTodos);
});

addButton.addEventListener("click", () => {
  const inputValue = newTodoInput.value.trim();
  if (inputValue) {
    todos.push({
      text: inputValue,
      completed: false,
    });
    generateTodas(todos);
    newTodoInput.value = "";
  }
});

function generateTodas(todosToAdd) {
  ul.innerHTML = "";
  for (let i = 0; i < todosToAdd.length; i++) {
    const li = document.createElement("li");
    li.textContent = todosToAdd[i].text;
    if (todosToAdd[i].completed) {
      li.classList.add("finished");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todosToAdd[i].completed;
    checkbox.addEventListener("change", (e) => {
      todos[i].completed = !todos[i].completed;
      generateTodas(todos);
    });
    li.append(checkbox);
    ul.append(li);
  }
}
generateTodas(todos);
