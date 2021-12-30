<script>
  import { onMount } from "svelte";

  import Router from "svelte-spa-router";
  import Tabbar from "./components/Tabbar.svelte";
  import TransactionTab from "./components/TransactionTab.svelte";
  import { routes } from "./routes";

  import PerfectScrollbar from 'perfect-scrollbar'

  const handleKeydown = (e) => {
    console.log(e);
    if (
      e.key === "F5" ||
      ((e.key === "r" || e.key === "R") && e.ctrlKey) ||
      ((e.key === "r" || e.key === "R") && e.ctrlKey && e.shiftKey)
    ) {
      console.log("no refresherino");
      e.preventDefault();
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const perfectScrollbar = (node) => {
    const ps = new PerfectScrollbar(node)
  }

  onMount(() => {
  });
</script>

<svelte:window on:keydown={handleKeydown} on:contextmenu={handleContextMenu} />

<main use:perfectScrollbar>
  <Router {routes} />
  <Tabbar />
  <TransactionTab />
</main>

<style>
  main {
    text-align: center;
    max-height: 100%;
    padding-top: calc(var(--tabbar-height) + 16px);
  }
</style>
