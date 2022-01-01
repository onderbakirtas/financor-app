<script>
  import BalanceInfo from "./BalanceInfo.svelte";
  import Logo from "./Logo.svelte";
  import TransactionButton from "./TransactionButton.svelte";
</script>

<div class="infobar">
  <Logo />
  <BalanceInfo />
  <!-- <TransactionButton /> -->
</div>

<style>
  .infobar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
</style>
