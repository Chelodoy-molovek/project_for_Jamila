import { database } from "./database.js";
const container = document.querySelector(".container");

//////////////////////////////////////////////////////////////////////////// (create html blocks)
let count = 0;

for (let i = 0; i < 6; i++) {
  const newDiv = document.createElement("div");
  container.append(newDiv);
  newDiv.className = "row_container";
  for (let q = 0; q < 5; q++) {
    const newDivChild = document.createElement("div");
    const newImg = document.createElement("img");
    newImg.src = `${database[count].img}`;
    newImg.className = "imgItems";
    newDivChild.append(newImg);
    newDiv.append(newDivChild);
    newDivChild.className = `element`;
    newDivChild.id = `${database[count].id}`;

    count = count + 1;
  }
}

////////////////////////////////////////////////////////////////////////////   popup

let allelements = document.querySelectorAll(".element");
let popupOpen = document.querySelector(".popup");
let popup_text = document.querySelector(".popup_text1");
let popup_image = document.querySelector(".popup_img1");
let popup_h1 = document.querySelector(".popup_h1");

allelements.forEach((element) => {
  element.addEventListener("click", (e) => {
    popupOpen.style.display = "block";
    console.log(popup_image)
    for (let i = 0; i < database.length; i++) {
      if (database[i].id === +element.id) {
        popup_image.src = `${database[i].img_popup}`
        popup_text.append(database[i].text)
        popup_h1.append(database[i].name)
      }
    }
    e.preventDefault();
  });
});

////////////////////////////////////////////////////////////////////////////
