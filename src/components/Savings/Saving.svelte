<script>
  import { store } from "../../store";

  export let title;
  export let target;
  export let dueTo;
  export let type;

  let percentage = $store.balance / target;
</script>

<div class="saving-card">
  <div class="saving-card-top">
    <span class="icon">
      <i class="bi bi-{type}" />
    </span>
    <div class="content">
      <span class="title">{title}</span>
      <span class="dueto">{dueTo}</span>
    </div>
    <div class="percentage">
      <span>%{percentage}</span>
    </div>
  </div>
  <div class="saving-card-bottom">
    <progress class="progress" max={target} value={$store.balance} />
    <div class="values">
      <span>{$store.balance} TL</span>
      <span>{target} TL</span>
    </div>
  </div>
</div>


<style lang="scss">
  @import "../../styles/colors";

  .saving-card {
    display: flex;
    flex-direction: column;
    padding: 10px;

    &-top {
      display: flex;
      width: 100%;

      & .icon {
        background-color: rgba($color: $c-blue, $alpha: 0.1);
        width: 45px;
        height: 45px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: $c-blue;
        border-radius: 8px;
      }

      & .content {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        padding-left: 10px;

        & .title {
          font-weight: 700;
          color: var(--c-black);
        }

        & .dueto {
          font-size: 14px;
          color: var(--c-gray-dark);
          margin-top: 4px;
        }
      }

      & .percentage {
        color: var(--c-blue);
        font-weight: 700;
        font-size: 18px;
      }
    }

    &-bottom {
      width: 100%;

      & .progress {
        width: 100%;
        height: 12px;
      }

      & .values {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 700;
        font-size: 14px;
      }
    }
  }
</style>
