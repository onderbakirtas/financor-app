<script>
  import { link } from "svelte-spa-router";
</script>

<a href="/home" use:link>Financor</a>

<style lang="scss">
  @import "../styles/colors";

  a {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.05rem;
    color: $c-black;
    text-decoration: none;

    &:hover {
      color: $c-gray-dark;
    }
  }
</style>
