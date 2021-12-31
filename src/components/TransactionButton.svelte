<button>
  <i class="bi bi-plus" />
  <span>Yeni</span>
</button>

<style lang="scss">
  @import '../styles/colors';

  button {
    height: 2.5rem;
    padding: 8px 12px 8px 8px;
    border-radius: 8px;
    border: none;
    display: inline-flex;
    align-items: center;
    background-color: var(--c-blue);
    color: #fff;

    & > i {
      font-size: 1.5rem;
    }

    &:hover {
      background-color: darken($c-blue, 10);
    }
  }
</style>
