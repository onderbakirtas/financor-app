<script>
  import { Financor } from "../utils/database";

  export let amount;
  export let category;
  export let type;

  const categories = new Financor().categories;

  const categoryText = categories.find((e) => e.name === category).text;
</script>

<div class="operation {type}">
  <span class="operation-amount">{amount} TL</span>
  <span class="operation-category">{categoryText}</span>
</div>

<style lang="scss">
  @import "../styles/colors";

  .operation {
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: 120px;
    justify-content: flex-end;
    color: $c-white;
    padding: 1rem;

    &.income {
      background: linear-gradient(225deg, $c-blue, darken($c-blue, 15));
    }

    &.expense {
      background: linear-gradient(225deg, $c-orange, darken($c-orange, 15));
    }

    &-amount {
      font-size: 20px;
    }

    &-category {
      opacity: 0.8;
      font-size: 15px;
    }
  }
</style>
