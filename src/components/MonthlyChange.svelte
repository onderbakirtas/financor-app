<script>
  export let status;
  export let amount = 0;

  $: iconClass = status === "income" ? "down" : "up";
  $: statusText = status === "income" ? "gelir" : "gider";
</script>

<div class="change">
  <span class="change-icon {status}">
    <i class="bi bi-arrow-{iconClass}-short" />
  </span>
  <div class="change-body">
    <span class="change-text">{statusText}</span>
    <span class="change-amount">{amount} TL</span>
  </div>
</div>

<style lang="scss">
  @import "../styles/colors";

  .change {
    display: flex;
    align-items: center;
    width: 100%;

    &-icon {
      height: 50px;
      width: 50px;
      border-radius: 8px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;

      &.income {
        background-color: lighten($color: $c-green, $amount: 50);
        color: darken($color: $c-green, $amount: 15);
      }

      &.expense {
        background-color: lighten($color: $c-red, $amount: 30);
        color: darken($color: $c-red, $amount: 15);
      }
    }

    &-body {
      display: flex;
      flex-direction: column;
      padding-left: 1rem;
      line-height: 1;
    }

    &-text {
      font-weight: 400;
      letter-spacing: 0.03rem;
      color: var(--c-gray-dark);
      text-transform: capitalize;
      font-size: 14px;
    }

    &-amount {
      font-weight: 700;
      color: var(--c-black);
      font-size: 1.25rem;
      margin-top: 3px;
    }
  }
</style>
