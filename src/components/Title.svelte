<script>
  import { location } from "svelte-spa-router";
  import { fly } from "svelte/transition";

  const routes = {
    "/home": "Anasayfa",
    "/transactions": "İşlemler",
    "/savings": "Birikimler",
    "/settings": "Ayarlar",
  };

  $: title = routes[$location];
</script>

{#key title}
  <span in:fly={{ y: -16 }} out:fly={{ y: 16 }}>{title}</span>
{/key}

<style lang="scss">
  span {
    font-size: 24px;
    font-weight: 700;
    color: var(--c-black);
    text-decoration: none;
    position: absolute;
  }
</style>
