import { createApp } from "vue";

const ButtonCount = {
  data() {
    return { count: 0 };
  },
  template: `<button @click=count++>Times Clicked: {{count}}</button>`,
};

createApp(ButtonCount).mount("#vue-root");
