<script>
  import BalanceInfo from "./BalanceInfo.svelte";
  import Title from "./Title.svelte";
</script>

<div class="infobar">
  <Title />
  <BalanceInfo />
</div>

<style lang="scss">
  .infobar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    z-index: 100;
    background-color: white;
    height: var(--h-infobar);
    position: fixed;
    box-shadow: 0 3px 24px var(--c-gray-light);
  }
</style>
