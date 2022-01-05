<script>
  import { fade } from "svelte/transition";
  import Button from "../components/Common/Button.svelte";
</script>

<div in:fade class="page">
  <Button text="Hesabı Sıfırla" accent="danger" block />
</div>
