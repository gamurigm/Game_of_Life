import game from "./game.js";

document.addEventListener('DOMContentLoaded', function() {
  const generationsValue = document.getElementById("generations-value");
  if (generationsValue) {
    generationsValue.textContent = game.getUpdateCount();
  } else {
    console.error("Element with ID 'generations-value' not found.");
  }
});
