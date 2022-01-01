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
    height: 150px;
    justify-content: flex-end;
    color: $c-white;
    padding: 1rem;
    width: 130px;

    &.income {
      background: linear-gradient(225deg, lighten($c-blue, 10), darken($c-blue, 20));
    }

    &.expense {
      background: linear-gradient(225deg, lighten($c-orange, 10), darken($c-orange, 20));
    }

    &-amount {
      font-size: 22px;
      font-weight: 700;
    }

    &-category {
      opacity: 0.8;
      font-size: 15px;
      font-weight: 300;
    }
  }
</style>
