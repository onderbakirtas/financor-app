<script>
  import { link } from "svelte-spa-router";
  import Transaction from "./Transaction.svelte";
</script>

<div class="recents">
  <header class="recents-header">
    <h2 class="recents-title">Son İşlemler</h2>
    <a href="/transactions" use:link>Tümü</a>
  </header>
  <main class="recents-list">
    <Transaction />
  </main>
</div>

<style lang="scss">
  .recents {
    margin-top: 2rem;

    &-header {
      display: flex;
      justify-content: space-between;
    }

    &-title {
      font-size: 1.5rem;
    }
  }
</style>
