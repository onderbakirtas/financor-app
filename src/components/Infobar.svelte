<script>
  import BalanceInfo from "./BalanceInfo.svelte";
  import TransactionButtons from "./TransactionButtons.svelte";

</script>

<div class="infobar">
  <BalanceInfo />
  <TransactionButtons />
</div>

<style>
  .infobar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    box-shadow: 0 5px 25px rgba(20, 30, 40, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
  }
</style>
