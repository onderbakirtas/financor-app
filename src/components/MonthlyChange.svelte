<script>
  export let status;
  export let amount = 0;

  $: iconClass = status === "income" ? "up" : "down";
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

    &-icon {
      height: 50px;
      width: 50px;
      border-radius: 8px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;

      &.income {
        background-color: lighten($color: $c-green, $amount: 45);
        color: darken($color: $c-green, $amount: 10);
      }

      &.expense {
        background-color: lighten($color: $c-red, $amount: 25);
        color: darken($color: $c-red, $amount: 10);
      }
    }

    &-body {
      display: flex;
      flex-direction: column;
      padding-left: 1rem;
      line-height: 1;
    }

    &-text {
      font-weight: 300;
      color: $c-gray-dark;
      text-transform: capitalize;
      font-size: 14px;
    }

    &-amount {
      font-weight: 600;
      color: $c-black;
      font-size: 1.25rem;
      margin-top: 3px;
    }
  }
</style>
