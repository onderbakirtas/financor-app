<script>
  import { store } from "../store";
</script>

<div class="balance-info">
  <span>Hesap</span>
  <b>{$store.balance} TL</b>
</div>

<style>
  .balance-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: auto;
  }

  span {
    font-size: 0.9rem;
  }

  b {
    font-size: 1.25rem;
    line-height: 1;
  }
</style>
