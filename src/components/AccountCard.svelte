<script>
  import { store } from "../store";
</script>

<div class="card">
  <span class="card-amount">{$store.balance} TL</span>
  <span class="card-title">Hesaptaki Para</span>
</div>

<style lang="scss">
  @import "../styles/colors";
  .card {
    background: linear-gradient(315deg, lighten($c-green, 3), darken($c-blue, 8));
    border-radius: 20px;
    padding: 15px 30px;
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 120px;
    color: #fff;

    &-title {
      font-weight: 300;
      opacity: 0.9;
      margin-top: 10px;
    }

    &-amount {
      font-size: 36px;
      font-weight: 700;
    }
  }
</style>
