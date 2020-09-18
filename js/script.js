let GNUM = 1;
let GMINUSHIDDEN = false;

function changeGNUM(val) {
  if (val === "add") {
    GNUM++;
    GMINUSHIDDEN = false;
  } else {
    GNUM--;
  }
  if (GNUM < 1) {
    document.getElementById("minus").disabled = true;
    GMINUSHIDDEN = true;
  } else if (!GMINUSHIDDEN) {
    document.getElementById("minus").disabled = false;
  }
  document.getElementById("curr-num").innerHTML = GNUM;
  drawStars(GNUM);
}

function drawStars(lines) {
  let string = "";
  for (j = lines; j > 0; j--) {
    let line = `<div class="line flex v-centered">${makeLine(j)}</div>`;
    string += line;
  }
  document.getElementById("canvas").innerHTML = `${string}`;
}

function makeLine(num) {
  let str = "";
  if (num > 1) {
    for (i = num + num - 1; i > 0; i--) {
      str += `<div class="star"></div>`;
    }
  } else {
    str += `<div class="star"></div>`;
  }
  return str;
}

document.getElementById("curr-num").innerHTML = GNUM;
drawStars(1);
