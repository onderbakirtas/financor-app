<script>
  import { fade } from "svelte/transition";
  import TransactionsBlock from "../components/Transactions/TransactionsBlock.svelte";
</script>

<div in:fade class="page">
  <TransactionsBlock date="3 Ocak 2022" />
  <TransactionsBlock date="31 Aralık 2021" />
  <TransactionsBlock date="29 Aralık 2021" />
  <TransactionsBlock date="28 Aralık 2021" />
  <TransactionsBlock date="25 Aralık 2021" />
</div>
