// ---- Resizing ----

function calcScale(averageWidth, clas, skew) {
  let path = document.getElementsByClassName(clas);
  let width = document.body.clientHeight;
  let x = width * 1/ averageWidth;
  for (el of path) el.style.transform = `scale(${x}) skew(${skew}deg)`
}

var distance = document.getElementById("yourCard").getBoundingClientRect();
console.log(Math.round(distance.right));

setInterval(function() {
    calcScale(1280, "hud", 0);
    calcScale(1050, "cardOnField", 0);
    calcScale(1090, "cardsInHand", 0);
    calcScale(1050, "timer", -17);
    calcScale(1090, "alertSpan", -17);
    calcScale(1100, "coins", -17);

    // document.documentElement.style.cssText = `--main-width: `;
    document.documentElement.style.setProperty("--main-width", `${document.getElementById('main').offsetWidth}px`);
}, 100);

function fullSize(turnedOn) {
  if (turnedOn) {
    document.getElementById('main').classList.add('fullSize');
  } else {
    document.getElementById('main').classList.remove('fullSize');
  }
}


fullSize(true);
