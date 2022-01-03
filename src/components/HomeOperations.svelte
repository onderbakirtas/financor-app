<script>
  import OperationCard from "./OperationCard.svelte";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  import { FreeMode } from "swiper";

  import "swiper/css";
  import "swiper/css/free-mode";

  const operations = [
    {
      type: "expense",
      amount: 49,
      category: "food",
    },
    {
      type: "income",
      amount: 500,
      category: "transfer",
    },
    {
      type: "expense",
      amount: 216,
      category: "oil",
    },
    {
      type: "expense",
      amount: 49,
      category: "food",
    },
    {
      type: "income",
      amount: 500,
      category: "transfer",
    },
    {
      type: "expense",
      amount: 216,
      category: "oil",
    },
  ];
</script>

<div class="block">
  <h4 class="block-title">İşlem Dağılımı</h4>
  <div class="block-operations">
    <Swiper
      class="operations-slider"
      freeMode
      spaceBetween={10}
      slidesPerView="auto"
      modules={[FreeMode]}
    >
      {#each operations as operation}
        <SwiperSlide>
          <OperationCard {...operation} />
        </SwiperSlide>
      {/each}
    </Swiper>
  </div>
</div>

<style lang="scss">
  @import "../styles/colors";

  .block {
    margin-top: 2rem;

    &-title {
      margin: 0;
      font-size: 20px;
      letter-spacing: -0.05rem;
      color: $c-black;
    }

    &-operations {
      margin-top: 1rem;
      margin-left: -1rem;
      margin-right: -1rem;
    }
  }

  :global(.operations-slider) {
    height: 150px;
    width: calc(100%);
    padding-left: 1rem;
  }

  :global(.operations-slider .swiper-wrapper) {
    padding-left: 1rem;
  }

  :global(.swiper-slide) {
    width: auto !important;
  }

  :global(.swiper-slide:last-child) {
    margin-right: 2rem;
  }
</style>
