// ---- Resizing ----

function calcScale(averageWidth, clas, skew) {
  let path = document.getElementsByClassName(clas);
  let width = document.body.clientHeight;
  let x = width * 1/ averageWidth;
  for (el of path) el.style.transform = `scale(${x}) skew(${skew}deg)`
}

setInterval(function() { calcScale(1280, "hud", 0); }, 100);
setInterval(function() { calcScale(1050, "cardOnField", 0); }, 100);
setInterval(function() { calcScale(1090, "cardsInHand", 0); }, 100);
setInterval(function() { calcScale(1050, "timer", -17); }, 100);
setInterval(function() { calcScale(1090, "alertSpan", -17); }, 100);
setInterval(function() { calcScale(1100, "coins", -17); }, 100);
