<script>
  import BalanceInfo from "./BalanceInfo.svelte";
  import Logo from "./Logo.svelte";
  import Title from "./Title.svelte";
</script>

<div class="infobar">
  <Title />
  <BalanceInfo />
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
