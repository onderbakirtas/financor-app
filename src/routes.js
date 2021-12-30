import Welcome from "./views/Welcome.svelte";
import Home from "./views/Home.svelte";
import Transactions from "./views/Transactions.svelte";
import Settings from "./views/Settings.svelte";
import Savings from "./views/Savings.svelte";

const routes = {
  "/": Welcome,
  "/home": Home,
  "/transactions": Transactions,
  "/settings": Settings,
  "/savings": Savings,
};

export { routes };
