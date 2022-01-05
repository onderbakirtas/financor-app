<script>
  import Saving from "../Savings/Saving.svelte";
  import { link } from "svelte-spa-router";

  const savings = [
    {
      title: "Yeni Telefon",
      target: 15000,
      dueTo: "01-09-2022",
      type: "phone-fill",
    },
    {
      title: "Yeni Telefon",
      target: 15000,
      dueTo: "01-09-2022",
      type: "phone-fill",
    },
    {
      title: "Yeni Telefon",
      target: 15000,
      dueTo: "01-09-2022",
      type: "phone-fill",
    },
    {
      title: "Yeni Telefon",
      target: 15000,
      dueTo: "01-09-2022",
      type: "phone-fill",
    },
  ];
</script>

<div class="block">
  <header class="block-header">
    <h4 class="block-header-title">Birikim Hedefleri</h4>
    <a href="/savings" use:link>Tümü</a>
  </header>
  <div class="block-list">
    {#each savings as saving}
      <Saving {...saving} />
    {/each}
  </div>
</div>
