let userName = prompt("Enter a user name: ");
let password;

let mainPass = "TheMaster";

let admin = "Admin";

if (userName === null || userName === "") {
  alert("Canceled");
} else if (userName === admin) {
  password = prompt("Enter your password: ");

  if (password === "" || password !== mainPass || password === null) {
    alert("Wrong password");
  } else {
    alert("Welcome");
  }
} else {
  alert("I don't know you");



}


const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.onchange = function() {
  const choice = select.value;
  
  // ADD CONDITIONAL HERE
let days;
switch (choice){
case 'February':
	days = 28;
	break;
case 'April':
case 'June':
case  'September':
case 'November':
	days = 30
	break;
default:
	days = 31;
}

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
choice = choice.charAt(0).toUpperCase() + choice.slice(1)
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(30,'June');


const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function() {
  const choice = select.value;

  // ADD SWITCH STATEMENT
switch (choice) {


case "Black":
	update("black","white")
	break;
case "Purple":
	update("purple", "black")
	break;
case "Yellow":
	update("yellow","black")
	break;
case "Psychedelic":
	update("psychedelic","black")
	break;

default:
	update("white","black")


}
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
