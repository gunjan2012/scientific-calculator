// target the input element
const display = document.getElementById("screen");
// target the memory div
const memory = document.getElementById("memory");
// display the value of button when clicked
function calDisplay(val) {
  console.log(display.value);
  display.value += val;
}
// solve the equation and display the answer
function solve() {
  let valueByuser = display.value;
  if (valueByuser.slice(0, 3) == "sin") {
    display.value = Math.sin(valueByuser.slice(3));
  } else if (valueByuser.slice(0, 3) == "cos") {
    display.value = Math.cos(valueByuser.slice(3));
    console.log("cos");
  } else if (valueByuser.slice(0, 3) == "tan") {
    display.value = Math.tan(valueByuser.slice(3));
  } else {
    display.value = eval(valueByuser);
  }
}
// clear the calculator display
function clr() {
  display.value = "";
}
// backspace - delete the one value
function del() {
  let valueByuser = display.value;
  display.value = valueByuser.slice(0, valueByuser.length - 1);
}
// power function
function power(val) {
  // for x^2
  if (val == "square") {
    display.value = Math.pow(display.value, 2);
  } else if (val == "cube") {
    display.value = Math.pow(display.value, 3);
  } else if (val == "ex") {
    // for e^x
    display.value = Math.pow(Math.E, display.value);
  } else {
    // for 10^x & 2^x
    display.value = Math.pow(val, display.value);
  }
}
// one by x
function oneByx() {
  let valueByuser = display.value;
  display.value = 1 / valueByuser;
}
// absolute value function
function absolt() {
  display.value = Math.abs(display.value);
}
// brackets
function brackets(val) {
  if (val == "open") {
    display.value += document.getElementById("left").innerHTML;
  } else {
    display.value += document.getElementById("right").innerHTML;
  }
}
// factorial function
function fact() {
  let n = display.value;
  let answer = 1;
  if (n == 0 || n == 1) {
    display.value = answer;
  } else if (n > 1) {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    display.value = answer;
  } else {
    display.value = "Error";
  }
}
// sqrt function
function root(val) {
  let valueByuser = display.value;
  if (val == "sq") {
    display.value = Math.sqrt(valueByuser);
  }
  if (val == "cu") {
    display.value = Math.ceil(valueByuser ** (1 / 3));
  }
}
// x^y function
function xy(val) {
  display.value += val;
}
//log and ln function
function funlog(val) {
  if (val == "log") {
    display.value = Math.log10(display.value).toFixed(4);
  }
  if (val == "ln") {
    display.value = Math.log(display.value).toFixed(4);
  }
}
// plusminus function
function plusminus() {
  display.value = display.value * -1;
}
// degree to radian and radian to degree
const btndeg = document.getElementById("deg");
// Change button text on click
btndeg.addEventListener("click", function handleclick() {
  if (btndeg.innerHTML == "DEG") {
    display.value = ((display.value * Math.PI) / 180).toFixed(4);
    btndeg.innerHTML = "RAD";
  } else {
    btndeg.innerHTML = "DEG";
    display.value = ((display.value * 180) / Math.PI).toFixed(4);
  }
});
// Memory operations
// Clear the memory
document.getElementById("mClear").addEventListener("click", function () {
  localStorage.removeItem("memoryKey");
  memory.innerText = localStorage.getItem("memoryKey");
});
// Recall the Memory : close browser and again start and when click MR it will take back ur value
document.getElementById("mRecall").addEventListener("click", function () {
  memory.innerText = localStorage.getItem("memoryKey");
});
// Addtion to Memory
document.getElementById("mPlus").addEventListener("click", function () {
  localStorage.setItem(
    "memoryKey",
    Number(localStorage.getItem("memoryKey")) + Number(display.value)
  );
  memory.innerText = localStorage.getItem("memoryKey");
});
// Subtraction to Memory
document.getElementById("mMinus").addEventListener("click", function () {
  localStorage.setItem(
    "memoryKey",
    Number(localStorage.getItem("memoryKey")) - Number(display.value)
  );
  memory.innerText = localStorage.getItem("memoryKey");
});
// Store value to Memory
document.getElementById("mStore").addEventListener("click", function () {
  localStorage.setItem("memoryKey", Number(eval(display.value)));
  memory.innerText = localStorage.getItem("memoryKey");
});
// find the exponential of enter value
function fixedExpo() {
  display.value = Number(display.value).toExponential();
}
// Second pannel
let second = document.getElementById("second");
second.addEventListener("click", function () {
  let btnChange = document.getElementsByClassName("btn-change");
  for (let i = 0; i < btnChange.length; i++) {
    const ele = btnChange[i];
    if (ele.classList.contains("btn-hide")) {
      ele.classList.add("btn-show");
      ele.classList.remove("btn-hide");
    } else {
      ele.classList.add("btn-hide");
      ele.classList.remove("btn-show");
    }
  }
});
// logyx functions
function log2x() {
  display.value = Math.log2(display.value);
}
// xbyTen function
function xbyTen() {
  display.value = display.value / 10;
}
// trignometry
// sin, cos, tan functionality
function trigno(val) {
  display.value += val;
}
// ceil and floor function that are in function dropdown
function roundValue(val) {
  if (val == "ceil") {
    display.value = Math.ceil(display.value);
  }
  if (val == "floor") {
    display.value = Math.floor(display.value);
  }
}
