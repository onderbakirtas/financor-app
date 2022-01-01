<script>
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";

  const tabs = [
    {
      text: "Ana Sayfa",
      link: "/home",
      icon: "house-door",
    },
    {
      text: "İşlemler",
      link: "/transactions",
      icon: "arrow-left-right",
    },
    {
      text: "Birikimler",
      link: "/savings",
      icon: "cash-stack",
    },
  ];
</script>

<nav class="tabbar">
  {#each tabs as item}
    <a href={item.link} use:link use:active>
      <i class="bi bi-{item.icon}" />
    </a>
  {/each}
</nav>

<style lang="scss">
  @import "../styles/colors";
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
    font-size: 1.5rem;

    & a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: calc(var(--tabbar-height) - 1rem);
      flex: 1 1 25%;
      width: 72px;
      border-radius: 50px;
      color: $c-black;
      font-weight: 700;
      text-decoration: none;
      margin-right: 5px;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: $c-blue;
        background-color: transparentize($color: $c-blue, $amount: 0.9);
      }
    }
  }

  :global(nav.tabbar a.active) {
    color: #fff;
    color: $c-blue;
    background-color: $c-blue;
    background-color: transparentize($color: $c-blue, $amount: 0.8);
  }

  :global(a.active:hover) {
    background-color: transparentize($color: $c-blue, $amount: 0.8) !important;
    color: $c-blue !important;
  }
</style>
