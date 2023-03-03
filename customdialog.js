export const customAlert = message => {
  openDialog(alertMarkup(message));
  setTimeout(() => {
    let button = document.querySelector("dialog button");
    button.addEventListener("click", () => {
      closeDialog();
    });
  });
};

const alertMarkup = message => `
  <dialog>
    <p>${message}</p>
    <button>Ok</button>
  </dialog>
`;

export const customConfirm = (message, onclick) => {
  openDialog(confirmMarkup(message));

  setTimeout(() => {
    let dialog = document.querySelector("dialog");

    dialog.addEventListener("close", () => {
      onclick(dialog.returnValue === "true");
      closeDialog();
    });
  });
};

const confirmMarkup = message => `
<dialog>
  <form method="dialog">
    <p>${message}</p>
    <div class="buttons">
      <button value="false">Cancel</button>
      <button value="true">Ok</button>
    </div>
  </form>
</dialog>
`;

export const customPrompt = (message, onclick) => {
  openDialog(promptMarkup(message));

  setTimeout(() => {
    let dialog = document.querySelector("dialog");
    let prompt = dialog.querySelector("input");

    dialog.addEventListener("close", () => {
      onclick(dialog.returnValue === "true" && prompt.value);
      closeDialog();
    });
  });
};

const promptMarkup = message => `
<dialog>
  <form method="dialog">
    <div class="field">
      <label for="prompt">${message}</label>
      <input type="text" id="prompt" name="prompt" />
    </div>
    <div class="buttons">
      <button value="false">Cancel</button>
      <button value="true">Ok</button>
    </div>
  </form>
</dialog>
`;

export function showPostPrompt({ post, onSave }) {
  openDialog(postPromptMarkup(post));
  setTimeout(() => addPostPromptListener(onSave));
}

const postPromptMarkup = (post = { title: "", date: "", summary: "" }) => `
<dialog>
    <form method="dialog">
      <div class="form-field">
        <label for="post-title">Title:</label>
        <input
          type="text"
          id="post-title"
          name="post-title"
          value="${post.title}"
          required
        />
      </div>
      <div class="form-field">
        <label for="post-date">Date:</label>
        <input
          type="date"
          id="post-date"
          name="post-date"
          value="${post.date}"
          required
        />
      </div>
      <div class="form-field">
        <label for="post-summary"></label>
        <input
          type="text"
          id="post-summary"
          name="post-summary"
          value="${post.summary}"
          required
        />
      </div>
      <div class="form-field">
        <button value="false">Cancel</button>
        <button value="true">Save</button>
      </div>
    </form>
  </dialog>
`;

export function showStyledPostPrompt({ post, onSave }) {
  openDialog(styledPostPromptMarkup(post));
  setTimeout(() => addPostPromptListener(onSave));
}

const styledPostPromptMarkup = (
  post = { title: "", date: "", summary: "" }
) => `
<dialog>
  <form method="dialog">
    <input
      type="text"
      id="post-title"
      name="post-title"
      value="${post.title}"
      placeholder="Post Title"
      required
    />
    <input
      type="date"
      id="post-date"
      name="post-date"
      value="${post.date}"
      required
    />
    <textarea
      type="text"
      id="post-summary"
      name="post-summary"
      placeholder="Post Summary"
      required
    >${post.summary}</textarea>
    <div class="buttons">
      <button value="false">Cancel</button>
      <button value="true">Save</button>
    </div>
  </form>
</dialog>
`;

const addPostPromptListener = onSave => {
  let dialog = document.querySelector("dialog");
  let title = dialog.querySelector("#post-title");
  let date = dialog.querySelector("#post-date");
  let summary = dialog.querySelector("#post-summary");

  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "true") {
      onSave({
        title: title.value,
        date: date.value,
        summary: summary.value,
      });
    }
    closeDialog();
  });
};

function openDialog(dialog) {
  closeDialog();
  setTimeout(() => {
    document.body.insertAdjacentHTML("beforeend", dialog);
    document.querySelector("dialog").showModal();
  }, 0);
}

function closeDialog() {
  let dialog = document.querySelector("dialog");
  if (dialog) {
    document.body.removeChild(dialog);
  }
}
