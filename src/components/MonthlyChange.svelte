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

    &-icon {
      height: 40px;
      width: 40px;
      border-radius: 5px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
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
    }

    &-amount {
      font-weight: 600;
      color: $c-black;
      font-size: 1.5rem;
      margin-top: 5px;
    }
  }
</style>
