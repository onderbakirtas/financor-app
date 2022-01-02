<script>
  import AccountCard from "../components/AccountCard.svelte";
  import Monthly from "../components/Monthly.svelte";
  import Operations from "../components/HomeOperations.svelte";
  import Recents from "../components/RecentTransactions.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="home" in:fade>
  <AccountCard />
  <Monthly />
  <Operations />
  <Recents />
</div>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
</style>
