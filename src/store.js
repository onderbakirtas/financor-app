import { Financor } from "./utils/database";
import { writable } from "svelte/store";

const financor = new Financor();

function storeHandler() {
  const data = {
    balance: 0,
  };

  const store = writable(data);

  const setBalance = (value) => {
    financor.balance = value;
    store.update((v) => ({ ...v, balance: value }));
  };

  return {
    subscribe: store.subscribe,
    setBalance,
  };
}

const store = storeHandler();

export { store };
