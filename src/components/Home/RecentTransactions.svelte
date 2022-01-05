<script>
  import { link } from "svelte-spa-router";
  import Transaction from "../Common/Transaction.svelte";
</script>

<div class="recents">
  <header class="block-header">
    <h2 class="block-header-title">Son İşlemler</h2>
    <a href="/transactions" use:link>Tümü</a>
  </header>
  <main class="recents-list">
    <Transaction type="expense" category="food" amount="54" date={Date.now()} />
    <Transaction type="expense" category="food" amount="54" date={Date.now()} />
    <Transaction type="expense" category="food" amount="54" date={Date.now()} />
    <Transaction type="expense" category="food" amount="54" date={Date.now()} />
  </main>
</div>

<style lang="scss">
  @import '../../styles/placeholders';

  .recents {
    margin-top: 2rem;

    &-list {
      @extend %box;
      margin-top: 1rem;
    }
  }
</style>
