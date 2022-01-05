<script>
  import { store } from "../../store";
</script>

<div class="card">
  <span class="card-amount">{$store.balance} TL</span>
  <span class="card-title">Hesaptaki Para</span>
</div>

<style lang="scss">
  @import "../../styles/colors";
  .card {
    background-color: darken($color: $c-blue, $amount: 10);
    border-radius: 20px;
    padding: 15px 30px;
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 120px;
    color: #fff;

    &-title {
      font-weight: 500;
      letter-spacing: 0.05rem;
      opacity: 0.9;
      margin-top: 10px;
    }

    &-amount {
      font-size: 40px;
      font-weight: 700;
    }
  }
</style>
