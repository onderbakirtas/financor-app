<script>
  export let type;
  export let category;
  export let date;
</script>

<div class="transaction">
  <span class="transaction-icon {type}">
    <i class="bi bi-cup-straw" />
  </span>
  <div class="transaction-body">
    <span class="title">Yemek</span>
    <span class="date">Bugün</span>
  </div>
  <div class="transaction-amount {type}">-15.00 TL</div>
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
        color: var(--c-blue);
      }

      &.expense {
        color: var(--c-orange);
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
