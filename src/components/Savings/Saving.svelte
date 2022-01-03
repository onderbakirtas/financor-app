<script>
  import { store } from "../../store";

  export let title;
  export let target;
  export let duration;
  export let type;

  let percentage = $store.balance / target;
</script>

<div class="saving-card">
  <div class="saving-card-top">
    <span class="icon">
      <i class="bi bi-{type}" />
    </span>
    <div class="content">
      <span>{title}</span>
      <span>{duration}</span>
    </div>
    <div class="percentage">
      <span>% {percentage}</span>
    </div>
  </div>
  <div class="saving-card-bottom">
    <progress max={target} value={$store.balance - target} />
    <div class="values">
      <span>{$store.balance - target} TL</span>
      <span>{target} TL</span>
    </div>
  </div>
</div>
