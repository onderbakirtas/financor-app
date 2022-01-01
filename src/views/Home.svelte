<script>
  import AccountCard from "../components/AccountCard.svelte";
  import Monthly from "../components/Monthly.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="home" in:fade>
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
