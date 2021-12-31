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
    justify-content: space-around;
    position: fixed;
    z-index: 1000;
    border-radius: 50px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1.5rem;
    box-shadow: 0 -5px 25px rgba(20, 30, 40, 0.15);
    padding: 8px;
    height: var(--tabbar-height);
  }

  nav a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: calc(var(--tabbar-height) - 1rem);
    flex: 1 1 25%;
    width: 100px;
    border-radius: 50px;
    color: #234;
    font-weight: 700;
    text-decoration: none;
  }

  nav a:hover {
    color: royalblue;
    background-color: #eef;
  }

  :global(nav.tabbar a.active) {
    color: royalblue;
  }
</style>
