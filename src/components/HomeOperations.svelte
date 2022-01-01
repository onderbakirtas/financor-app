<script>
  import OperationCard from "./OperationCard.svelte";

  const operations = [
    {
      type: "expense",
      amount: 49,
      category: "food",
    },
    {
      type: "income",
      amount: 500,
      category: "transfer",
    },
    {
      type: "expense",
      amount: 216,
      category: "oil",
    },
  ];
</script>

<div class="block">
  <h4 class="block-title">İşlem Dağılımı</h4>
  <div class="block-operations">
    {#each operations as operation}
      <OperationCard {...operation} />
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../styles/colors";
  
  .block {
    margin-top: 2rem;

    &-title {
      margin: 0;
      font-size: 20px;
      letter-spacing: -0.05rem;
      color: $c-black;
    }

    &-operations {
      display: flex;
      margin-top: 1rem;
    }
  }
</style>
