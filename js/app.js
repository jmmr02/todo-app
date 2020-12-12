const addButton = document.querySelector('[data-hook="js-addBtn"]');
const todosList = document.querySelector('[data-hook="js-todosList"]');

let numTodos = document.querySelectorAll('[data-hook="js-todos"]').length;

addButton.addEventListener("click", function (e) {
	e.preventDefault();

	const inputField = document.querySelector('[data-hook="js-inputField"]');

	if (inputField.value !== "") {
		numTodos += 1;

		const newTodo = document.createElement("li");
		newTodo.classList.add("todos");
		newTodo.dataset.hook = "js-todos";

		const newInput = `<input type="checkbox" name="todos" id="todos-${numTodos}" class="todos__input">`;
		const newLabel = `<label for="todos-${numTodos}" class="todos__label">${inputField.value}</label>`;

		newTodo.innerHTML = `${newInput} ${newLabel}`;

		todosList.append(newTodo);

		inputField.value = "";
	}
});

todosList.addEventListener("click", function (e) {
	let element = e.target;

	if (element.nodeName === "INPUT") {
		element.nextElementSibling.classList.toggle("todos__label--completed");
	}
});
