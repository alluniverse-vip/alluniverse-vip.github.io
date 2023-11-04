import { createApp } from "vue";
import "@/styles/index.scss";
import App from "./App.vue";
import "uno.css";
import router from "@/router";

const app = createApp(App);
app.use(router).mount("#app");
