export default function outlineWatcher() {
  let previousAction = null;

  document.addEventListener("mousedown", () => {
    if (previousAction === "mousedown") {
      return;
    }
    document.body.classList.remove("tabbed");
    previousAction = "mousedown";
  });

  document.addEventListener("keydown", (e) => {
    if (previousAction === "keydown") {
      return;
    }
    const keyCode = e.key;
    if (keyCode === 9) {
      document.body.classList.add("tabbed");
    }

    previousAction = "keydown";
  });
}
