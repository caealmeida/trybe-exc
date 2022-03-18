function createDaysOfTheWeek() {
	const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
	const weekDaysList = document.querySelector(".week-days");

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement("li");
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	}
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
	29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
	31,
];

// Exc 1
function montaCalendario() {
	const daysList = document.getElementById("days");
	for (let i = 0; i < dezDaysList.length; i += 1) {
		const elementLi = document.createElement("li");
		elementLi.className = "day";
		elementLi.innerHTML = dezDaysList[i];

		if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
			elementLi.classList.add("holiday");
		}
		if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
			elementLi.classList.add("friday");
		}

		daysList.appendChild(elementLi);
	}
}

montaCalendario();

//Exc 2
function criaBotaoFeriados(str) {
	const getBtnContainer = document.querySelector(".buttons-container");
	const btnFeriados = document.createElement("button");
	btnFeriados.id = "btn-holiday";
	btnFeriados.innerHTML = str;
	getBtnContainer.appendChild(btnFeriados);
}

criaBotaoFeriados("Feriados");

//Exc 3
function mostrarFeriados() {
	const getBtnHoliday = document.getElementById("btn-holiday");
	const holidayList = document.querySelectorAll(".holiday");
	let bgColor = "rgb(238,238,238)";
	let bgNewColor = "rgb(104, 243, 104)";

	getBtnHoliday.addEventListener("click", function () {
		for (let i in holidayList) {
			if (holidayList[i].style.background === bgNewColor) {
				holidayList[i].style.background = bgColor;
			} else {
				holidayList[i].style.background = bgNewColor;
			}
		}
	});
}

mostrarFeriados();

//Exc 4
function criaBotaoSextas(str) {
	const getBtnContainer = document.querySelector(".buttons-container");
	const btnSextas = document.createElement("button");
	btnSextas.id = "btn-friday";
	btnSextas.innerHTML = str;
	getBtnContainer.appendChild(btnSextas);
}

criaBotaoSextas("Sexta-Feira");

//Exc 5
function mostrarSextas(fridays) {
	const getbtnSextas = document.getElementById("btn-friday");
	const fridayList = document.querySelectorAll(".friday");
	let newText = "sextou!";

	getbtnSextas.addEventListener("click", function () {
		for (let i in fridayList) {
			if (fridayList[i].innerHTML !== newText) {
				fridayList[i].innerHTML = newText;
			} else {
				fridayList[i].innerHTML = fridays[i];
			}
		}
	});
}

let fridays = [4, 11, 18, 25];
mostrarSextas(fridays);

//Exc 6
const daysList = document.querySelector("#days");
function daysMouseOver() {
	daysList.addEventListener("mouseover", function (event) {
		event.target.style.fontWeight = "500";
		event.target.style.fontSize = "30px";
	});
}

function daysMouseOut() {
	daysList.addEventListener("mouseout", function (event) {
		event.target.style.fontWeight = "200";
		event.target.style.fontSize = "20px";
	});
}

daysMouseOver();
daysMouseOut();

//Exc 7
function newTaskSpan(task) {
	let tasksContainer = document.querySelector(".my-tasks");
	let newTask = document.createElement("span");
	newTask.innerHTML = task;
	tasksContainer.appendChild(newTask);
}

newTaskSpan("Cozinhar:");

//Exc 8
function newTaskDiv(color) {
	let myTask = document.querySelector(".my-tasks");
	let newDiv = document.createElement("div");

	newDiv.className = "task";
	newDiv.style.backgroundColor = color;
	myTask.appendChild(newDiv);
}

newTaskDiv("pink");

//Exc 9
function setTaskClass() {
	const selectedTask = document.getElementsByClassName("task-selected");
	const getTask = document.querySelector(".task");

	getTask.addEventListener("click", function (event) {
		if (selectedTask.length === 0) {
			event.target.className = "task-selected";
		} else {
			event.target.className = "task";
		}
	});
}

setTaskClass();

//Exc 10
