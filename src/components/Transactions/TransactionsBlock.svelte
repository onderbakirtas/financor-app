<script>
  import Transaction from "../Common/Transaction.svelte";
  export let date;
</script>

<div class="transaction-block">
  <h2 class="title">
    <i class="bi bi-calendar-event" />
    <span>{date}</span>
  </h2>
  <div class="list">
    <Transaction type="expense" category="food" amount="54" date={Date.now()} />
    <Transaction type="expense" category="food" amount="54" date={Date.now()} />
    <Transaction type="expense" category="food" amount="54" date={Date.now()} />
  </div>
</div>

<style lang="scss">
  @import "../../styles/placeholders";

  :global(.transaction-block) {
    & + & {
      margin-top: 2rem;
    }
  }

  .transaction-block {
    .title {
      font-size: 15px;
      color: var(--c-black);
      padding-left: 6px;

      & > span {
        padding-left: 6px;
      }
    }

    .list {
      margin-top: 12px;
      @extend %box;
    }
  }
</style>
