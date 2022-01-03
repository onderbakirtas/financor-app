<script>
  import { fade } from "svelte/transition";
  import Saving from "../components/Savings/Saving.svelte";

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

<div class="page" in:fade>
  {#each savings as saving}
    <div class="box">
      <Saving {...saving} />
    </div>
  {/each}
</div>

<style lang="scss">
  @import "../styles/placeholders";

  .box {
    @extend %box;
    margin-bottom: 1rem;
  }
</style>
