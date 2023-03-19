const items = [
	{ imgSrc: "1.png", btnId: "btn1" },
	{ imgSrc: "1.png", btnId: "btn2" },
	{ imgSrc: "1.png", btnId: "btn3" },
	{ imgSrc: "1.png", btnId: "btn4" },
	{ imgSrc: "1.png", btnId: "btn5" },
	{ imgSrc: "1.png", btnId: "btn6" },
];

const itemsContainer = document.getElementById("items-container");

items.forEach((item) => {
	const itemElement = document.createElement("div");
	itemElement.classList.add("item");
	const imgElement = document.createElement("img");
	imgElement.src = item.imgSrc;
	imgElement.alt = "Burger";
	imgElement.classList.add("img");
	const btnElement = document.createElement("button");
	btnElement.classList.add("btn");
	btnElement.id = item.btnId;
	btnElement.innerText = "Add";
	itemElement.appendChild(imgElement);
	itemElement.appendChild(btnElement);
	itemsContainer.appendChild(itemElement);

	// add event listener to the "Add" button
	btnElement.addEventListener("click", (event) => {
		const addBtn = event.currentTarget;
		const itemContainer = addBtn.parentNode;
		const counterElement = document.createElement("div");
		const minusBtnElement = document.createElement("button");
		const plusBtnElement = document.createElement("button");
		let count = 1;

		// hide the "Add" button
		addBtn.style.display = "none";

		// set up the counter element
		counterElement.classList.add("counter");
		counterElement.innerText = count;

		// set up the minus button
		minusBtnElement.classList.add("btn-minus");
		minusBtnElement.innerText = "-";
		minusBtnElement.addEventListener("click", () => {
			if (count > 1) {
				count--;
				counterElement.innerText = count;
			} else {
				// if count is 1, remove the counter and minus button and show the "Add" button again
				itemContainer.removeChild(minusBtnElement);
				itemContainer.removeChild(counterElement);
				itemContainer.removeChild(plusBtnElement);
				addBtn.style.display = "block";
			}
		});

		// set up the plus button
		plusBtnElement.classList.add("btn-plus");
		plusBtnElement.innerText = "+";
		plusBtnElement.addEventListener("click", () => {
			count++;
			counterElement.innerText = count;
		});

		// add the counter and plus/minus buttons to the item container
		itemContainer.appendChild(minusBtnElement);
		itemContainer.appendChild(counterElement);
		itemContainer.appendChild(plusBtnElement);
	});
});

let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p); 





