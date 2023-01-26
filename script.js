const container = document.querySelector(".container");
for (let i = 0; i < 6; i++) {
  const newDiv = document.createElement("div");
  container.append(newDiv);
  newDiv.className = "row_container";
  for (let q = 0; q < 5; q++) {
    const newDivChild = document.createElement("div");
    newDiv.append(newDivChild);
    newDivChild.className = "element";
  }
}
