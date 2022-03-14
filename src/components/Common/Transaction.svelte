<script>
  import { getDaysPast } from "../../utils/helpers";
  import { Financor } from "../../utils/database";

  export let type;
  export let category;
  export let date;
  export let amount;

  const status = type === 'expense' ? '-' : ''
  const time = getDaysPast(date);
  const categories = new Financor().categories;
  const categoryText = categories.find((e) => e.name === category).text;
</script>

<div class="transaction">
  <span class="transaction-icon {type}">
    <i class="bi bi-cup-straw" />
  </span>
  <div class="transaction-body">
    <span class="title">{categoryText}</span>
    <span class="date">{time}</span>
  </div>
  <div class="transaction-amount {type}">{status}{amount} TL</div>
</div>

<style lang="scss">
  .transaction {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 1rem;

    &-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;

      &.income {
        color: var(--c-green);
      }

      &.expense {
        color: var(--c-red);
      }
    }

    &-body {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      line-height: 1;
      padding-left: 1rem;

      & .title {
        font-weight: 700;
        color: var(--c-black);
      }

      & .date {
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.05rem;
        color: var(--c-gray-light);
        display: inline-block;
        margin-top: 5px;
        text-transform: capitalize;
      }
    }

    &-amount {
      font-weight: 700;

      &.income {
        color: var(--c-green);
      }

      &.expense {
        color: var(--c-red);
      }
    }
  }
</style>
