// const today = new Date(1900, 0, 1);
// console.log(today);
// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDate());
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.toISOString());
// console.log(today.getTime());

let count = 1;
const log = () => {
  console.log(count++);
};
// let timeoutID = setTimeout(log, 5000);
// console.log(timeoutID);
// // code
// clearTimeout(timeoutID);

// const intervalID = setInterval(log, 1000);
// setTimeout(() => clearInterval(intervalID), 5000);
// console.log("object");

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// console.log(3);

// let t = setTimeout(() => {
//   console.log(111);
// }, 2000);
// setTimeout(() => {
//   clearTimeout(t);
// }, 3000);

//  DOM
const nav = document.getElementById("nav");
// const nav2 = document.querySelector("#nav");
// console.log([nav]);
// console.log([nav2]);
// const navItems = document.getElementsByClassName("nav-item");
// const navItems = document.querySelectorAll("#nav");
// const navItem = document.querySelector(".nav-item");
// console.log(navItems);
//[...navItems].forEach((item) => {
//   console.log([item]);
// });

const header = document.createElement("header");
header.innerHTML = "Day la Header";
nav.before(header);
// document.body.appendChild(header);
// header.insertAdjacentHTML(
//   "afterend",
//   `<div class='abc'>
//         <h1>Day la Header</h1>
//         <h1>Day la Header</h1>
//     </div>`
// );

// header.remove();
// document.body.removeChild(nav);

header.style.color = "red";
header.style.fontSize = "48px";
header.style.backgroundColor = "black";
header.setAttribute("href", "abcxyz");
/**
 * header {
 *  color: red;
 * }
 */

console.log(nav.classList);
nav.classList.add("P");
// nav.classList.remove("P");
nav.classList.toggle("P");

// document.addEventListener("wheel", () => {
//   console.log("wheel");
// });
// document.addEventListener("scroll", () => {
//   console.log("scroll");
// });
function click(event) {
  event.stopPropagation();
  console.log(event);
  console.log("click vao header");
}
// header.onclick = click;
// header.addEventListener("mousemove", () => {
//   console.log("mousemove header");
// });
header.addEventListener("click", click);
// header.removeEventListener("click", click);
