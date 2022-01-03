<script>
  import Saving from "../Savings/Saving.svelte";

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
  <h4 class="block-title">Birikim Hedefleri</h4>
  <div class="block-list">
    {#each savings as saving}
      <Saving {...saving} />
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../../styles/placeholders";

  .block {
    &-list {
      @extend %box;
      padding: 5px;
    }
  }
</style>

