const addButton = document.querySelector(`.add`);
const form = document.querySelector(`.textBox`);
const ul = document.querySelector(`ul`);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //input
  const input = document.querySelector(`.input`);
  //new-div
  const newDiv = document.createElement(`div`);
  newDiv.classList.add(`newDiv`);
  //new-li
  const newLi = document.createElement(`li`);
  newLi.textContent = input.value;
  newLi.classList.add(`newLi`);
  newDiv.appendChild(newLi);
  //ok-button
  const okButton = document.createElement(`button`);
  okButton.innerHTML = '<i class="fas fa-check"></i>';
  okButton.classList.add(`okButton`);
  newDiv.appendChild(okButton);
  //trash-button
  const trashButton = document.createElement(`button`);
  trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  trashButton.classList.add(`trashButton`);
  newDiv.appendChild(trashButton);
  //appending div to ul
  ul.append(newDiv);
  input.value = "";
  //events
  okButton.addEventListener(`click`, () => {
    newDiv.classList.toggle(`completed`);
    // okButton.disabled = true;
  })
  trashButton.addEventListener(`click`, () => {
    newDiv.classList.toggle(`del`);
    (trashButton.parentElement).addEventListener(`transitionend`, () => {
      newDiv.remove();
    })
  })
})