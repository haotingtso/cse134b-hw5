export const customAlert = message => {
  // create dialog fragment
  let template = document.getElementById("alert-template");
  let dialog = template.content.cloneNode(true);

  // select fragment child
  let button = dialog.querySelector("button");
  let alert_message = dialog.querySelector("#alert-message");

  // append dialog element to the body
  document.body.appendChild(dialog);

  // get the dialog element and add a message and an event listener to the button
  dialog = document.querySelector("dialog");
  alert_message.appendChild(document.createTextNode(message));
  button.addEventListener("click", () => {
    document.body.removeChild(dialog);
  });
  dialog.showModal();
};

export const customConfirm = (message, onclick = closeDialog) => {
  // create dialog fragment
  let template = document.getElementById("confirm-template");
  let dialog = template.content.cloneNode(true);

  // select fragment child
  let [cancel, ok] = dialog.querySelectorAll("button");
  let confirm_message = dialog.querySelector("#confirm-message");

  // append dialog element to the body
  document.body.appendChild(dialog);

  // get the dialog element and add a message and event listeners to the buttons
  dialog = document.querySelector("dialog");
  confirm_message.appendChild(document.createTextNode(message));
  cancel.addEventListener("click", () => {
    onclick(false);
    document.body.removeChild(dialog);
  });
  ok.addEventListener("click", () => {
    onclick(true);
    document.body.removeChild(dialog);
  });
  dialog.showModal();
};

export const customPrompt = (message, onclick = closeDialog) => {
  // create dialog fragment
  let template = document.getElementById("prompt-template");
  let dialog = template.content.cloneNode(true);

  // select fragment child
  let label = dialog.querySelector("label");
  let input = dialog.querySelector("input");
  let [cancel, ok] = dialog.querySelectorAll("button");

  // append dialog element to the body
  document.body.appendChild(dialog);

  // get the dialog element and add a message and event listeners to the buttons
  dialog = document.querySelector("dialog");
  label.appendChild(document.createTextNode(message));
  cancel.addEventListener("click", () => {
    onclick("");
    document.body.removeChild(dialog);
  });
  ok.addEventListener("click", () => {
    onclick(input.value);
    document.body.removeChild(dialog);
  });
  dialog.showModal();
};

// let alert_btn = document.getElementById("alert-btn");
// let confirm_btn = document.getElementById("confirm-btn");
// let prompt_btn = document.getElementById("prompt-btn");
// let output = document.querySelector("output");

// function main() {
//   addEventListeners();
//   modifyEventListeners();
// }

// function modifyEventListeners() {
//   window.alert = message => {
//     // create dialog fragment
//     let template = document.getElementById("alert-template");
//     let dialog = template.content.cloneNode(true);

//     // select fragment child
//     let button = dialog.querySelector("button");
//     let alert_message = dialog.querySelector("#alert-message");

//     // append dialog element to the body
//     document.body.appendChild(dialog);

//     // get the dialog element and add a message and an event listener to the button
//     dialog = document.querySelector("dialog");
//     alert_message.appendChild(document.createTextNode(message));
//     button.addEventListener("click", () => {
//       document.body.removeChild(dialog);
//     });
//     dialog.showModal();
//   };

//   window.confirm = (message, onclick = closeDialog) => {
//     // create dialog fragment
//     let template = document.getElementById("confirm-template");
//     let dialog = template.content.cloneNode(true);

//     // select fragment child
//     let [cancel, ok] = dialog.querySelectorAll("button");
//     let confirm_message = dialog.querySelector("#confirm-message");

//     // append dialog element to the body
//     document.body.appendChild(dialog);

//     // get the dialog element and add a message and event listeners to the buttons
//     dialog = document.querySelector("dialog");
//     confirm_message.appendChild(document.createTextNode(message));
//     cancel.addEventListener("click", () => {
//       onclick(false);
//       document.body.removeChild(dialog);
//     });
//     ok.addEventListener("click", () => {
//       onclick(true);
//       document.body.removeChild(dialog);
//     });
//     dialog.showModal();
//   };

//   window.prompt = (message, onclick = closeDialog) => {
//     // create dialog fragment
//     let template = document.getElementById("prompt-template");
//     let dialog = template.content.cloneNode(true);

//     // select fragment child
//     let label = dialog.querySelector("label");
//     let input = dialog.querySelector("input");
//     let [cancel, ok] = dialog.querySelectorAll("button");

//     // append dialog element to the body
//     document.body.appendChild(dialog);

//     // get the dialog element and add a message and event listeners to the buttons
//     dialog = document.querySelector("dialog");
//     label.appendChild(document.createTextNode(message));
//     cancel.addEventListener("click", () => {
//       onclick("");
//       document.body.removeChild(dialog);
//     });
//     ok.addEventListener("click", () => {
//       onclick(input.value);
//       document.body.removeChild(dialog);
//     });
//     dialog.showModal();
//   };
// }

// function addEventListeners() {
//   alert_btn.addEventListener("click", () => {
//     setOutput("");
//     setTimeout(() => {
//       window.alert("Alert pressed!");
//     }, 0);
//   });

//   confirm_btn.addEventListener("click", () => {
//     setOutput("");

//     const onclick = isOk => {
//       setOutput(`Confirm result : ${isOk}`);
//     };

//     setTimeout(() => {
//       window.confirm("Can you confirm this?", onclick);
//     }, 0);
//   });

//   prompt_btn.addEventListener("click", () => {
//     setOutput("");

//     const onclick = message => {
//       message = cleanUserInput(message);
//       setOutput(
//         message ? `Prompt result : ${message}` : "User didn't enter anything"
//       );
//     };

//     setTimeout(() => {
//       window.prompt("What is your name?", onclick);
//     }, 0);
//   });
// }

// function cleanUserInput(userInput) {
//   return DOMPurify.sanitize(userInput);
// }

// function setOutput(newContent) {
//   output.innerHTML = newContent;
//   output.style.border = newContent ? "10px double black" : "";
// }

// main();
