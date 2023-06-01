import game from "./game.js";

document.addEventListener('DOMContentLoaded', function() {
  const generationsValue = document.getElementById("generations-value");
  function updateGenerationsValue() {
    if (generationsValue) {
      generationsValue.textContent = game.getUpdateCount();
    } else {
      console.error("Element with ID 'generations-value' not found.");
    }
  }
  updateGenerationsValue();
  setInterval(updateGenerationsValue, 100); 

  });

  const velocitySlider = document.getElementById("velocity-slider");
  const velocityValue = document.getElementById("velocity-value");
  
  velocitySlider.addEventListener("input", function() {
    const interval = parseInt(this.value);
    velocityValue.textContent = interval;
    game.updateInterval(interval);
  });
  
