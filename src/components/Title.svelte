<script>
  import { location } from "svelte-spa-router";

  const routes = {
    "/home": "Anasayfa",
    "/transactions": "İşlemler",
    "/savings": "Birikimler",
    "/settings": "Ayarlar",
  };

  $: title = routes[$location];
</script>

<span>{title}</span>

<style lang="scss">
  span {
    font-size: 24px;
    font-weight: 700;
    color: var(--c-black);
    text-decoration: none;
  }
</style>
