/* Bulb ON/OFF

let bulb = document.querySelector("#bulb");
let btn = document.querySelector("button");
let flag = 0;
btn.addEventListener("click", () => {
  if (flag === 0) {
    bulb.style.backgroundColor = "yellow";
    btn.innerHTML = "OFF";
    flag = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    btn.innerHTML = "ON";
    flag = 0;
  }
});

*/

/* Insta add/remove friend button

const frndBtn = document.querySelector("button");
let flag = 0;
frndBtn.addEventListener("click", () => {
  if (flag === 0) {
    frndBtn.innerHTML = "Remove";
    frndBtn.style.backgroundColor = "red";
    flag = 1;
  } else {
    frndBtn.innerHTML = "Add Friend";
    frndBtn.style.backgroundColor = "green";
    flag = 0;
  }
});

*/

/* Insta Like Button

const postCard = document.querySelector("#card");
const postLike = document.querySelector("#like-btn");
const likeBtn = document.querySelector("#like");
let flag = 0;
postCard.addEventListener("dblclick", () => {
  postLike.style.transform = "translate(-50%, -50%) scale(1)";
  postLike.style.opacity = 0.7;
  setTimeout(() => {
    postLike.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    postLike.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});
likeBtn.addEventListener("click", () => {
  if (flag === 0) {
    likeBtn.style.color = "black";
    flag = 1;
  } else {
    likeBtn.style.color = "red";
    flag = 0;
  }
});

*/

/* custom cursor*/

const crsrBdy = document.querySelector(".cursor-body");
const crsr = document.querySelector(".cursor");
crsrBdy.addEventListener("mousemove", (elem) => {
  crsr.style.left = elem.x + "px";
  crsr.style.top = elem.y + "px";
});

/* Hover Effect 

const elem = document.querySelectorAll(".elem");
elem.forEach((val) => {
  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", (dets) => {
    val.childNodes[3].style.left = dets.x + "px";
  });
});

*/
