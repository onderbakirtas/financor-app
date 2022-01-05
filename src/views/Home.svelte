<script>
  import AccountCard from "../components/Home/AccountCard.svelte";
  import Monthly from "../components/Home/HomeMonthly.svelte";
  import Operations from "../components/Home/HomeOperations.svelte";
  import Recents from "../components/Home/RecentTransactions.svelte";
  import Savings from "../components/Home/HomeSavings.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="home" in:fade>
  <AccountCard />
  <Monthly />
  <Operations />
  <Recents />
  <Savings />
</div>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
</style>
