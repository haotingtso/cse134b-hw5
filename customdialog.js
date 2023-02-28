let alert_btn = document.getElementById("alert-btn");
let confirm_btn = document.getElementById("confirm-btn");
let prompt_btn = document.getElementById("prompt-btn");
let output = document.querySelector("output");
let dialog = document.querySelector("dialog");

function main() {
  addEventListeners();
  modifyEventListeners();
}

function modifyEventListeners() {
  window.alert = message => {
    let template = document.getElementById("alert-template");
    let clone = template.content.cloneNode(true);
    let button = clone.querySelector("button");

    button.addEventListener("click", closeDialog);

    dialog.appendChild(document.createTextNode(message));
    dialog.appendChild(clone);
    dialog.showModal();
  };

  window.confirm = (message, onclick = closeDialog) => {
    let template = document.getElementById("confirm-template");
    let clone = template.content.cloneNode(true);

    let buttons = clone.querySelectorAll("button");
    let [cancel, ok] = buttons;

    cancel.addEventListener("click", () => onclick(false));
    ok.addEventListener("click", () => onclick(true));

    dialog.appendChild(document.createTextNode(message));
    dialog.appendChild(clone);
    dialog.showModal();
  };

  window.prompt = (message, onclick = closeDialog) => {
    let template = document.getElementById("prompt-template");
    let clone = template.content.cloneNode(true);

    let control = clone.querySelector(".control");
    let input = clone.querySelector("input");
    let buttons = clone.querySelectorAll("button");
    let [cancel, ok] = buttons;

    cancel.addEventListener("click", () => onclick(""));
    ok.addEventListener("click", () => onclick(input.value));

    control.insertBefore(document.createTextNode(message), control.firstChild);
    dialog.appendChild(clone);
    dialog.showModal();
  };
}

function addEventListeners() {
  alert_btn.addEventListener("click", () => {
    setOutput("");
    setTimeout(() => {
      window.alert("Alert pressed!");
    }, 0);
  });

  confirm_btn.addEventListener("click", () => {
    setOutput("");

    const onclick = isOk => {
      setOutput(`Confirm result : ${isOk}`);
      closeDialog();
    };

    setTimeout(() => {
      window.confirm("Can you confirm this?", onclick);
    }, 0);
  });

  prompt_btn.addEventListener("click", () => {
    setOutput("");

    const onclick = message => {
      message = cleanUserInput(message);
      setOutput(
        message ? `Prompt result : ${message}` : "User didn't enter anything"
      );
      closeDialog();
    };

    setTimeout(() => {
      window.prompt("What is your name?", onclick);
    }, 0);
  });
}

function cleanUserInput(userInput) {
  return DOMPurify.sanitize(userInput);
}

function setOutput(newContent) {
  output.innerHTML = newContent;
  output.style.border = newContent ? "10px double black" : "";
}

function closeDialog() {
  dialog.innerHTML = ``;
  dialog.close();
}

main();
