<script>
  import { onMount } from "svelte";
  import Router from "svelte-spa-router";
  import Tabbar from "./components/Tabbar.svelte";
  import { routes } from "./routes";
  import Infobar from "./components/Infobar.svelte";
  import Scrollbar from "smooth-scrollbar";

  import "smooth-scrollbar/dist/smooth-scrollbar.css";

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

  const scrollbar = (node) => {
    Scrollbar.init(node, {
      alwaysShowTracks: false
    });
  };
</script>

<svelte:window on:keydown={handleKeydown} on:contextmenu={handleContextMenu} />

<Infobar />
<div class="app" use:scrollbar>
  <Router {routes} />
</div>
<Tabbar />

<style lang="scss">
  .app {
    padding-bottom: 6rem;
    max-height: calc(100vh - var(--h-infobar));
  }
</style>
