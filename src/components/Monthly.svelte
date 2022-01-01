<script>
  import MonthlyChange from "./MonthlyChange.svelte";
</script>

<div class="monthly">
  <MonthlyChange status="income" amount="6100" />
  <MonthlyChange status="expense" amount="5435" />
</div>

<style lang="scss">
  .monthly {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
  }
</style>

