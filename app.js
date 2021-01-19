"use strict";

// Selectors for buttons and other elements

const create = document.querySelector(".create");
const newNote = document.querySelector("#newNote");
const noteBox = document.querySelector(".notes");
const container = document.querySelector(".container");
const closeBtn = document.querySelectorAll(".close");
const text = document.querySelector(".divText");
const modal = document.querySelector(".myModal");
const closeModalBtn = document.querySelector(".closeModal");

create.addEventListener("click", function () {
  // Check if theres any input in textArea
  if (newNote.value === "") return alert("Please enter some text");

  // Create close button for each div element
  const close = document.createElement("button");
  close.classList.add("close");
  close.classList.add("btn");
  close.textContent = "Close";

  const seeMore = document.createElement("button");
  seeMore.classList.add("modalBtn");
  seeMore.textContent = "More";

  // Create inner text for each div element
  const textInner = document.createElement("P");
  textInner.classList.add("divText");
  textInner.textContent = newNote.value;

  // Text content that i will push to text area in modal
  const textForModal = [];
  textForModal.push(newNote.value);

  // Create div element for each text input and append button and text
  const newNoteBox = document.createElement("div");
  newNoteBox.classList.add("notes");
  newNoteBox.append(close);
  newNoteBox.append(seeMore);
  newNoteBox.append(textInner);

  // Append div to container
  container.append(newNoteBox);

  newNote.value = "";

  // Add event listener to see modal window
  seeMore.addEventListener("click", function () {
    const newModal = document.querySelector(".modal");
    newModal.style.display = "block";
    const modalText = document.querySelector(".modalText");
    modalText.textContent = textForModal[0];

    // Close modal window on close button click
    closeModalBtn.addEventListener("click", function () {
      newModal.style.display = "none";
    });

    // Close modal window on click outside of modal
    window.onclick = (e) => {
      if (e.target === newModal) {
        newModal.style.display = "none";
      }
    };
  });

  // Add event listener for close btn
  close.addEventListener("click", function () {
    newNoteBox.classList.add("hidden");
  });
});
