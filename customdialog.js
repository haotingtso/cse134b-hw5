export const customAlert = message => {
  // create dialog fragment
  let template = document.getElementById("alert-template");
  let dialog = template.content.cloneNode(true);

  // select fragment child
  let button = dialog.querySelector("button");
  let alert_message = dialog.querySelector("#alert-message");

  // modify content and add event listener
  alert_message.appendChild(document.createTextNode(message));
  button.addEventListener("click", () => {
    closeDialog();
  });

  openDialog(dialog);
};

export const customConfirm = (message, onclick) => {
  // create dialog fragment
  let template = document.getElementById("confirm-template");
  let dialog = template.content.cloneNode(true);

  // select fragment child
  let [cancel, ok] = dialog.querySelectorAll("button");
  let confirm_message = dialog.querySelector("#confirm-message");

  // modify content and add event listener
  confirm_message.appendChild(document.createTextNode(message));
  cancel.addEventListener("click", () => {
    onclick(false);
    closeDialog();
  });
  ok.addEventListener("click", () => {
    onclick(true);
    closeDialog();
  });

  openDialog(dialog);
};

export const customPrompt = (message, onclick) => {
  // create dialog fragment
  let template = document.getElementById("prompt-template");
  let dialog = template.content.cloneNode(true);

  // select fragment child
  let label = dialog.querySelector("label");
  let input = dialog.querySelector("input");
  let [cancel, ok] = dialog.querySelectorAll("button");

  // modify content and add event listener
  label.appendChild(document.createTextNode(message));
  cancel.addEventListener("click", () => {
    onclick("");
    closeDialog();
  });
  ok.addEventListener("click", () => {
    onclick(input.value);
    closeDialog();
  });

  openDialog(dialog);
};

export function showPostPrompt({
  post = { title: "", date: "", summary: "" },
  onSave = closeDialog,
}) {
  // create dialog fragment
  let template = document.getElementById("post-prompt-template");
  let dialog = template.content.cloneNode(true);

  // select fragment child
  let title_input = dialog.querySelector("#post-title");
  let date_input = dialog.querySelector("#post-date");
  let summary_input = dialog.querySelector("#post-summary");
  let [cancel, save] = dialog.querySelectorAll("button");

  // modify content and add event listener
  let { title, date, summary } = post;
  title_input.value = title;
  date_input.value = date;
  summary_input.value = summary;

  cancel.addEventListener("click", () => {
    closeDialog();
  });

  save.addEventListener("click", () => {
    onSave({
      title: title_input.value,
      date: date_input.value,
      summary: summary_input.value,
    });
    closeDialog();
  });

  openDialog(dialog);
}

function openDialog(dialog) {
  let existing_dialog = document.querySelector("dialog[open]");
  if (existing_dialog) {
    document.body.removeChild(existing_dialog);
  }

  setTimeout(() => {
    document.body.appendChild(dialog);
    document.querySelector("dialog").showModal();
  }, 0);
}

function closeDialog() {
  let dialog = document.querySelector("dialog");
  if (dialog) {
    document.body.removeChild(dialog);
  }
}
