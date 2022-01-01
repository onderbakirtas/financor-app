<script>
  import MonthlyChange from "./MonthlyChange.svelte";
</script>

<div class="monthly">
  <MonthlyChange status="income" />
  <MonthlyChange status="expense" />
</div>

<style lang="scss">
  .monthly {
    display: flex;
    justify-content: space-between;
  }
</style>

