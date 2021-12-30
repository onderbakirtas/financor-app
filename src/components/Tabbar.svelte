<script>
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";

  const tabs = [
    {
      text: "Ana Sayfa",
      link: "/home",
    },
    {
      text: "İşlemler",
      link: "/transactions",
    },
    {
      text: "Birikimler",
      link: "/savings",
    },
  ];
</script>

<nav class="tabbar">
  {#each tabs as item}
    <a href={item.link} use:link use:active>{item.text}</a>
  {/each}
</nav>

<style>
  nav {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 0;
    box-shadow: 0 5px 10px rgba(20, 30, 40, 0.1);
  }

  nav a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 25%;
    height: var(--tabbar-height);
  }

  :global(nav.tabbar a.active) {
    color: red;
  }
</style>
