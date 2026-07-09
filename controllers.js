// Tastatur: A/B/C/D wählen, Enter bestätigen, Esc abbrechen, Q aufhören

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (key === "enter") {
    const confirmBtn = document.getElementById("confirmAnswerBtn");
    const confirmArea = document.getElementById("confirmArea");
    if (confirmBtn && confirmArea && confirmArea.style.display !== "none") {
      event.preventDefault();
      confirmBtn.click();
    }
    return;
  }

  if (key === "escape") {
    const cancelBtn = document.getElementById("cancelAnswerBtn");
    const confirmArea = document.getElementById("confirmArea");
    if (cancelBtn && confirmArea && confirmArea.style.display !== "none") {
      event.preventDefault();
      cancelBtn.click();
    }
    return;
  }

  if (["a", "b", "c", "d"].includes(key)) {
    const btn = document.querySelector(`button.answer-btn[data-answer="${key}"]`);
    if (btn && !btn.disabled) {
      btn.click();
    }
  } else if (key === "q") {
    const quitBtn = document.getElementById("quitGame");
    if (quitBtn && !quitBtn.disabled) {
      quitBtn.click();
    }
  }
});

window.addEventListener("gamepadconnected", (e) => {
  console.log("Gamepad verbunden:", e.gamepad);
});

function pollGamepad() {
  const gp = navigator.getGamepads()[0];
  if (gp) {
    if (gp.buttons[0].pressed) {
      const btn = document.querySelector(`button.answer-btn[data-answer="a"]`);
      if (btn && !btn.disabled) btn.click();
    }
  }
  requestAnimationFrame(pollGamepad);
}
requestAnimationFrame(pollGamepad);
