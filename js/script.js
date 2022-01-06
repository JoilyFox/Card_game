// Elements

let card1 = document.getElementById('card0');
let card2 = document.getElementById('card1');
let card3 = document.getElementById('card2');

let timerElement = document.getElementById('timer');

let coinsAmount = document.querySelector('#coins .amount');
let coinsObj = document.querySelector('#coins');

let myCoins = document.getElementById('my_coins');
let myHud = document.getElementsByClassName('yourHud')[0];

let yourChosenCardAnim = document.getElementById('myChosenCardAnimation');
let enemyChosenCardAnim = document.getElementById('enemyChosenCardAnimation');

let enemyChosenCard = document.getElementById('enemyChosenCard');

// All cards 

let cards = [

	{str: 2, cost: 1, img: 1},
	{str: 1, cost: 1, img: 2},
	{str: 2, cost: 2, img: 3},
	{str: 1, cost: 1, img: 4},
	{str: 3, cost: 2, img: 5},
	{str: 5, cost: 4, img: 6},
	{str: 4, cost: 3, img: 7},
	{str: 4, cost: 4, img: 8},
	{str: 3, cost: 2, img: 9},
	{str: 5, cost: 4, img: 10},
	{str: 2, cost: 1, img: 11},
	{str: 3, cost: 3, img: 12},
	{str: 3, cost: 2, img: 13},
	{str: 2, cost: 1, img: 14},
	{str: 5, cost: 5, img: 15},
	{str: 1, cost: 1, img: 16},
	{str: 4, cost: 3, img: 17},
	{str: 3, cost: 2, img: 18},
	{str: 4, cost: 3, img: 19},
	{str: 5, cost: 4, img: 20},
	{str: 4, cost: 3, img: 21},
	{str: 4, cost: 4, img: 22},
	{str: 3, cost: 3, img: 23},
];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


// Technical functions 

function getRandomInRange(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// Generate deck

let yourCards = [null, null, null];
let enemyCards = [null, null, null];


function generateCardDeck(arr) {
	shuffle(cards);

	var haveMinCost = false;
	for (var i = 0; i < arr.length; i++) 
		if (arr[i] != null) if (arr[i].cost <= coins) haveMinCost = true;
		
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == null)
		if (haveMinCost == false) {
			let n = 0;
			while (true) {
				var card = cards[Math.floor(Math.random()*cards.length)];
				if (card.cost <= coins) {
					arr[i] = card;
					break;
				}
				if (n == cards.length - 1) break;
				n++;
			}

			haveMinCost = true;
		} else {
			arr[i] = cards[Math.floor(Math.random()*cards.length)];
		}
	}

}



// Render cards

function renderCard(obj, htmlId) {
	if (obj != null) 
	document.getElementById(`card${htmlId}`).innerHTML = `
		<img src="assets/img/cards/${obj.img}.jpeg" alt="Card" class="cardImgRaw" id="cardImgRaw">
		<img src="assets/img/stats.png" alt="Stats" class="cardStatsImg">
        <div class="cardStats">
            <span id="str">${obj.str}</span>
            <span id="cost">${obj.cost}</span>
        </div>
	`
}

function renderCardDeck(arr) {
	for (var i = 0; i < arr.length + 1; i++) 
	renderCard(arr[i], i);

}

function renderActiveCard(obj) {
	setTimeout(() => {
		document.getElementById('myChosenCard').innerHTML = `
		<img src="assets/img/cards/${obj.img}.jpeg" alt="Card" class="cardImgRaw" id="cardImgRaw">
        <img src="assets/img/stats.png" alt="Stats" class="cardStatsImg">
        <div class="cardStats">
            <span id="str">${obj.str}</span>
            <span id="cost">${obj.cost}</span>
        </div>`
	}, 300);
}

function renderEnemyActiveCard(obj) {
	enemyChosenCard.innerHTML = `
	<img src="assets/img/cards/${obj.img}.jpeg" alt="Card" class="cardImgRaw" id="cardImgRaw">
    <img src="assets/img/stats.png" alt="Stats" class="cardStatsImg">
    <div class="cardStats">
        <span id="str">${obj.str}</span>
        <span id="cost">${obj.cost}</span>
    </div>`
    enemyChosenCard.classList.remove('hidden');
}

	
	// render coins in hud

function renderCoins(coins) {
	coinsAmount.innerHTML = coins;
}

	// render hp

function renderHp(index, id) {
  let maxHp = 5;
  let el = document.getElementById(id).getElementsByTagName('span')[0];
  let i = maxHp - (index);
  switch(index) {
    case 0:
      el.style.transform  = `scaleX(calc(1 - ${(1 / maxHp) * i}))`;
      el.style.backgroundColor = "rgb(102, 189, 80)";
      break;
    case 1:  
      el.style.transform  = `scaleX(calc(1 - ${(1 / maxHp) * i}))`;
      el.style.backgroundColor = "rgb(224, 80, 44)";
      break;
    case 2:  
      el.style.transform  = `scaleX(calc(1 - ${(1 / maxHp) * i}))`;
      el.style.backgroundColor = "rgb(224, 146, 44)";
      break;
    case 3:  
      el.style.transform  = `scaleX(calc(1 - ${(1 / maxHp) * i}))`;
      el.style.backgroundColor = "rgb(221, 211, 67)";
      break;
    case 4:  
      el.style.transform  = `scaleX(calc(1 - ${(1 / maxHp) * i}))`;
      el.style.backgroundColor = "rgb(163, 206, 65)";
      break;
    case 5:  
      el.style.transform  = `scaleX(calc(1 - ${(1 / maxHp) * i}))`;
      el.style.backgroundColor = "rgb(102, 189, 80)";
      break;
    
  }
}

// Call alert

function callAlert(message) {
	var alert = document.querySelector('.alert');
	alert.querySelector('span.alertSpan').innerHTML = `${message} `;

	// Appearing
	alert.style.display = 'flex';
	setTimeout(() => {
		alert.style.opacity = '1';
	}, 300);

	// Disappearing
	setTimeout(() => {
		alert.style.opacity = '0';
		setTimeout(() => {
			alert.style.display = 'none';
		}, 300);
	}, 1500);
}

// Set timer (turned off)

function setTimer(seconds) {
	// setTimeout(() => {timerElement.style.opacity = '1';}, 1000);

	let current = seconds;

	ttc = 1;
	timer = setInterval(() => {
		// console.log(ttc);
		ttc++;

		// timerElement.innerHTML = `${current}`;
		// current--;
	}, 1000);
}
function clearTimer() {
	ttc = 0;
	clearInterval(timer);
	stopTimerForRandom = true;
	timerElement.style.opacity = '0';
}
function clearTimerRandom() {	
	clearTimer();
	let yourChosenCard = yourCards[0];
	let card = 0;

	for (var i = 1; i < yourCards.length; i++) {
		if (yourChosenCard.cost <= coins) {
			if (yourChosenCard.str < yourCards[i].str && yourCards[i].cost <= coins) {
				yourChosenCard = yourCards[i];
				card = i;
			}
		} else {
			yourChosenCard = yourCards[i];
			card = i;
		}
	}
	setTimeout(() => {
		onClickAction(card);
	}, 1000);
}


// Onclick card

function onClickAction(card) {

	// your card animation and rendering

	choseCardOff();
	var cardSpan = document.getElementById(`card${card}`);
	cardSpan.classList.add('active');
	setTimeout(() => {
		cardSpan.classList.add('transparent');
		setTimeout(() => {
			cardSpan.innerHTML = '';
			cardSpan.classList.remove('transparent');
			cardSpan.classList.remove('active');
		}, 300);
	}, 300);

	renderActiveCard(yourCards[card]);

	// chosing enemy card

	let enemyChosenCard = enemyCards[0];
	let enemyCardId = 0;

	for (var i = 1; i < enemyCards.length; i++) {
		if (enemyChosenCard.cost <= coins) {
			if (enemyChosenCard.str < enemyCards[i].str && enemyCards[i].cost <= coins) {
				enemyChosenCard = enemyCards[i];
				enemyCardId = i;
			}
		} else {
			enemyChosenCard = enemyCards[i];
			enemyCardId = i;
		}
	}

	// enemy card animation and rendering

	renderEnemyActiveCard(enemyChosenCard);

	// determining the winner

	let yourCard = yourCards[card];
	let enemyCard = enemyChosenCard;

	if (yourCard.str > enemyCard.str) {
		// Animation

		setTimeout(() => {
			btnlAnim();
		}, 600)

		// Rendering and continue
		setTimeout(() => {
			console.log('You have won!')
			callAlert('You have won!');

			enemyHealth--;
			renderHp(yourHealth, "yourHealth");
			renderHp(enemyHealth, "enemyHealth");


			if (yourHealth == 0 || enemyHealth == 0)
				winOrLose();
			else
				setTimeout(() => {gameRound()}, 2000);

		}, 3000)
	} else if (yourCard.str < enemyCard.str) {
		// Animation
		setTimeout(() => {
			btnlAnim();
		}, 600)

		// Rendering and continue
		setTimeout(() => {
			console.log('You lose!')
			callAlert('You lose!');

			yourHealth--;
			renderHp(yourHealth, "yourHealth");
			renderHp(enemyHealth, "enemyHealth");


			if (yourHealth == 0 || enemyHealth == 0)
				winOrLose();
			else
				setTimeout(() => {gameRound()}, 2000);

		}, 3000)
	} else if (yourCard.str == enemyCard.str) {
		// Animation
		setTimeout(() => {
			btnlAnim();
		}, 600)

		// Rendering and continue
		setTimeout(() => {
			console.log('Draw!')
			callAlert('Draw!');

			setTimeout(() => {gameRound()}, 2000);
		}, 3000)
	}

	function btnlAnim() {
		yourChosenCardAnim.style.animationName  = 'winYou';
		enemyChosenCardAnim.style.animationName  = 'winEnemy';
	}

	// Returning cards to their places after animation

	setTimeout(() => {
		yourChosenCardAnim.style.animationName  = 'none';
		enemyChosenCardAnim.style.animationName  = 'none';
	}, 5000)

	// clearing array of chosing card

	yourCards[card] = null;
	console.log(enemyCardId);
	enemyCards[enemyCardId] = null;
	
}

function winOrLose() {
	if (yourHealth == 0) {
		callAlert('You lose this game!');
	} else if (enemyHealth == 0) {
		callAlert('You have won this game!');
	}
}


function youCantDoThis() {
	console.log('You can not do this!');

	coinsObj.classList.add('active');
	coinsObj.classList.add('z');

	setTimeout(() => {coinsObj.classList.remove('active');}, 200);
	setTimeout(() => {coinsObj.classList.remove('z');}, 800);
}


let checkClick = false;

function onClickCard(number) {

	if (ttc != 0 && (yourCards[number].cost <= coins)) {
			onClickAction(number);
			checkClick = true;
			clearTimer();
		}
	else 
		if (yourCards[number].cost > coins) youCantDoThis();
}

// Show mode of cards

function choseCardOn() {
	var deck = document.getElementById('yourCardsInHand');
	deck.classList.add('choseCard');
}
function choseCardOff() {
	var deck = document.getElementById('yourCardsInHand');
	deck.classList.remove('choseCard');
}





// GAME LOGIC

let coins = 0;
let maxCoins = 5;

let yourHealth = 5;
let enemyHealth = 5;

let ttc = 0;
let stopTimerForRandom = false;

function gameRound() {
	enemyChosenCard.classList.add('hidden');

	stopTimerForRandom = false;

	checkClick = false;

	if (coins < maxCoins)
		coins++;

	ttc = 0;

	generateCardDeck(yourCards);
	console.log(yourCards);

	generateCardDeck(enemyCards);
	console.log(enemyCards);


	renderCardDeck(yourCards);
	renderCoins(coins);

	callAlert('Choose a card');

	setTimeout(() => {
		let timerSeconds = 7;
		setTimer(timerSeconds);
		choseCardOn();

	}, 1500);
}
gameRound();











