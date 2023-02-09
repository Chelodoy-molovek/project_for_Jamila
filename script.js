import {database1} from './database.js'
const container = document.querySelector(".container");
console.log(database1)

//////////////////////////////////////////////////////////////////////////// (create html blocks)
let count = 0;

for (let i = 0; i < 6; i++) {
  const newDiv = document.createElement("div");
  container.append(newDiv);
  newDiv.className = "row_container";
  for (let q = 0; q < 5; q++) {
    
    const newDivChild = document.createElement("div");
    const newImg = document.createElement('img');
    newImg.src=`${database1[count].img}`
    newImg.className = "imgItems"
    newDivChild.append(newImg);
    newDiv.append(newDivChild);
    newDivChild.className = `element id${count}`;
    count = count + 1;
  }
}


////////////////////////////////////////////////////////////////////////////   popup

let allelements = document.querySelectorAll(".element");
let popupOpen = document.querySelector(".popup");
allelements.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault()
    popupOpen.style.display = "block";
  });
});



////////////////////////////////////////////////////////////////////////////
