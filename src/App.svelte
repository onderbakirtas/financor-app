<script>
  import Scrollbar from "smooth-scrollbar";
  import Router from "svelte-spa-router";
  import Infobar from "./components/Infobar.svelte";
  import Tabbar from "./components/Tabbar.svelte";
  import { routes } from "./routes";
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
    padding-bottom: 1rem;
    padding-top: 4rem;
    max-height: calc(100vh - var(--h-infobar));
  }
</style>
