<script>
  export let text;
  export let accent;
  export let block;
</script>

<button class="btn {accent}" class:block>{text}</button>

<style lang="scss">
  @import "../../styles/colors";

  .btn {
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-family: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: var(--c-gray-dark);
    color: #fff;
    font-size: 14px;

    &:hover {
      background-color: darken($color: $c-gray-dark, $amount: 10);
    }

    &.block {
      width: 100%;
    }

    &.danger {
      background-color: var(--c-red);

      &:hover {
        background-color: darken($color: $c-red, $amount: 10);
      }
    }

    &.success {
      background-color: var(--c-green);

      &:hover {
        background-color: darken($color: $c-green, $amount: 10);
      }
    }

    &.warn {
      background-color: var(--c-orange);

      &:hover {
        background-color: darken($color: $c-orange, $amount: 10);
      }
    }
  }
</style>
