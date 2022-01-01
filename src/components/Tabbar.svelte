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
    {
      text: "Profil",
      link: "/profile",
      icon: "gear",
    },
  ];
</script>

<nav class="tabbar">
  <div class="tabbar-left">
    {#each tabs.slice(0, 2) as item}
      <a href={item.link} use:link use:active>
        <i class="bi bi-{item.icon}" />
      </a>
    {/each}
  </div>
  <button class="tabbar-add">
    <i class="bi bi-plus" />
  </button>
  <div class="tabbar-right">
    {#each tabs.slice(-2) as item}
      <a href={item.link} use:link use:active>
        <i class="bi bi-{item.icon}" />
      </a>
    {/each}
  </div>
</nav>

<style lang="scss">
  @import "../styles/colors";

  .tabbar {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 1000;
    border-radius: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 2rem);
    bottom: 1.5rem;
    box-shadow: 0 6px 32px rgba(20, 30, 40, 0.1);
    padding: 8px;
    height: var(--tabbar-height);

    &-add {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: 4rem;
      width: 4rem;
      border-radius: 5rem;
      font-size: 2.75rem;
      line-height: 1;
      padding: 0;
      background-color: darken($color: $c-blue, $amount: 0);
      color: $c-white;
      box-shadow: 0 0 0 6px $c-white;
    }

    & a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: calc(var(--tabbar-height) - 1rem);
      flex: 1 1 25%;
      width: 64px;
      border-radius: 50px;
      color: $c-black;
      font-weight: 700;
      text-decoration: none;
      margin-right: 5px;
      font-size: 1.25rem;

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
    color: $c-blue !important;
    background-color: $c-blue;
    background-color: transparentize($color: $c-blue, $amount: 0.8);
  }

  :global(a.active:hover) {
    background-color: transparentize($color: $c-blue, $amount: 0.8) !important;
    color: $c-blue !important;
  }
</style>
