const addButton = document.querySelector(".js-addButton");
const allTodos = document.querySelectorAll(".js-todos");
const todoList = document.querySelector(".js-todoList");
const menu = document.querySelector(".js-menu");

let numOfTodos = allTodos.length;

const existingTodos = [...allTodos];
let completedTodos = [];
let activeTodos = [];

function createNewTodo(e) {
	e.preventDefault();
	let inputField = document.querySelector(".js-inputField");

	if (inputField.value !== "") {
		numOfTodos += 1;

		const li = document.createElement("li");
		li.classList.add("todos", "js-todos");

		const input = document.createElement("input");
		input.type = "checkbox";
		input.name = "todos";
		input.id = `todos-${numOfTodos}`;
		input.classList.add("todos__input");

		const label = document.createElement("label");
		label.htmlFor = `todos-${numOfTodos}`;
		label.classList.add("todos__label");
		label.textContent = `${inputField.value}`;

		// append created input and label to li
		li.appendChild(input);
		li.appendChild(label);

		// append newly created todo to todo list
		todoList.appendChild(li);

		// clear input field after adding new todo
		inputField.value = "";

		// push newly created todos to existing todos
		existingTodos.push(li);
	}
}

function toggleTodoState(e) {
	const element = e.target;

	if (element.nodeName === "INPUT") {
		element.nextElementSibling.classList.toggle("todos__label--completed");
		element.parentElement.classList.toggle("--complete");
	}
}

function setActiveTab(e) {
	const element = e.target;

	if (element.nodeName === "LI") {
		const lastActive = document.querySelector(".menu__item--active");
		lastActive.classList.remove("menu__item--active");
		element.classList.add("menu__item--active");
	}
}

addButton.addEventListener("click", createNewTodo);
todoList.addEventListener("click", toggleTodoState);
menu.addEventListener("click", setActiveTab);
