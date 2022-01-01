<script>
  import AccountCard from "../components/AccountCard.svelte";
  import Monthly from "../components/Monthly.svelte";
</script>

<div class="home">
  <AccountCard />
  <Monthly />
</div>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
</style>
