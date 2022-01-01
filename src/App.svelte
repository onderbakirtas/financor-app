<script>
  import { onMount } from "svelte";

  import Router from "svelte-spa-router";
  import Tabbar from "./components/Tabbar.svelte";
  import { routes } from "./routes";

  import PerfectScrollbar from "perfect-scrollbar";
  import Infobar from "./components/Infobar.svelte";

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
    const ps = new PerfectScrollbar(node);
  };

  onMount(() => {});
</script>

<svelte:window on:keydown={handleKeydown} on:contextmenu={handleContextMenu} />

<main use:perfectScrollbar>
  <Router {routes} />
  <Infobar />
  <Tabbar />
</main>

<style>
  main {
    max-height: 100%;
    padding-top: var(--tabbar-height);
  }
</style>
