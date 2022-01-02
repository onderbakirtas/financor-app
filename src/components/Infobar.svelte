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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    z-index: 100;
    background-color: white;
    height: var(--h-infobar);
    position: relative;
  }
</style>
