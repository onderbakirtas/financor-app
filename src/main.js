import App from "./app.svelte";
import "./app.css";
import { Financor } from "./utils/database";

const financor = new Financor();

financor.init();

const app = new App({
  target: document.body,
});

export default app;
