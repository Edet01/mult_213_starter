// src/app.js

import { renderMessage } from "./dom.js";
import { getDogImage, getCatFact, getFoxImage } from "./api.js";

// Use const for DOM elements
const dogForm = document.querySelector("#dog-form");
const dogOutput = document.querySelector("#dog-output");

const catForm = document.querySelector("#cat-form");
const catOutput = document.querySelector("#cat-output");

const foxForm = document.querySelector("#fox-form");
const foxOutput = document.querySelector("#fox-output");

// Dog section event listener (Uses: async/await, arrow function, try/catch error handling)
dogForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  // Dynamic Content Update 1: Display loading message
  renderMessage(dogOutput, "<p>Loading dog image... 🐕</p>");

  try {
    const imageUrl = await getDogImage();
    // Dynamic Content Update 2: Display fetched image data
    // Uses template literal for image HTML
    renderMessage(dogOutput, `<img src="${imageUrl}" alt="Random Dog"/>`);
  } catch (err) {
    // Dynamic Content Update 3: Display error message
    renderMessage(dogOutput, `<p style="color:red;">Error: ${err.message}</p>`);
  }
});

// Cat section event listener (Uses: async/await, arrow function, try/catch error handling)
catForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  renderMessage(catOutput, "<p>Loading cat fact... 🐈</p>");

  try {
    const fact = await getCatFact();
    // Uses template literal for fact HTML
    renderMessage(catOutput, `<p class="fact-text">${fact}</p>`);
  } catch (err) {
    renderMessage(catOutput, `<p style="color:red;">Error: ${err.message}</p>`);
  }
});

// Fox section event listener (Uses: async/await, arrow function, try/catch error handling)
foxForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  renderMessage(foxOutput, "<p>Loading fox image... 🦊</p>");

  try {
    const imageUrl = await getFoxImage();
    // Uses template literal for image HTML
    renderMessage(foxOutput, `<img src="${imageUrl}" alt="Random Fox"/>`);
  } catch (err) {
    renderMessage(foxOutput, `<p style="color:red;">Error: ${err.message}</p>`);
  }
});