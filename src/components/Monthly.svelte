<script>
  import MonthlyChange from "./MonthlyChange.svelte";
</script>

<div class="monthly">
  <h2 class="monthly-title">Aylık Değişimler</h2>
  <div class="monthly-list">
    <MonthlyChange status="income" amount="6100" />
    <MonthlyChange status="expense" amount="5435" />
  </div>
</div>

<style lang="scss">
  @import "../styles/placeholders";

  .monthly {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 2rem;

    &-title {
      @extend %home-title;
    }

    &-list {
      padding: 1rem;
      @extend %box;
      display: flex;
      align-items: center;
    }
  }
</style>
