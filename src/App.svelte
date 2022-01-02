<script>
  import Router from "svelte-spa-router";
  import Tabbar from "./components/Tabbar.svelte";
  import { routes } from "./routes";
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
</script>

<svelte:window on:keydown={handleKeydown} on:contextmenu={handleContextMenu} />

<main>
  <Router {routes} />
  <Infobar />
  <Tabbar />
</main>

<style>
  main {
    padding-top: var(--tabbar-height);
    padding-bottom: calc(var(--tabbar-height) + 2rem);
  }
</style>
