let btns = document.querySelectorAll(".box");
let sub = document.querySelector("#sub");
let reset = document.querySelector("#reset");
let turnx = true;
let clickCount=0;

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (btn of btns) {
  btn.addEventListener("click", gamestart);
}

function gamestart() {
  console.log("btn clicked");
  clickCount++;
  if(clickCount==9){
    sub.innerText=`Draw`;

  }
  if (turnx) {
    this.innerText = "x";
    this.style.color="black";
    turnx = false;
  } else {
    this.innerText = "o";
    turnx = true;
  }
  this.disabled = true;

  checkWinner();
}

function checkWinner() {
  for (pattern of winPatterns) {
    let pos1 = btns[pattern[0]].innerText;
    let pos2 = btns[pattern[1]].innerText;
    let pos3 = btns[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
        if(pos1 === pos2 && pos2 === pos3){
            console.log("winner");
            printWinner(pos1);
        }
    }
  }
}

function printWinner(pos1){
    sub.innerText=`winner is ${pos1}`;
    for (btn of btns) {
        btn.disabled=true;
    }
}

reset.addEventListener("click",()=>{
    for (btn of btns) {
        btn.disabled=false;
        btn.innerText="";
    }

    sub.innerText="";

})
