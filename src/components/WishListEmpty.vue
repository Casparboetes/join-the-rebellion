<template>
  <div class="wish-list-empty">
    <h2 class="wish-list-empty__sub-header">Love It? Add To My Wishlist</h2>
    <p class="wish-list-empty__paragraph">
      My Wishlist allows you to keep track of all of your favorites and shopping
      activity whether you're on your computer, phone, or tablet. You won't have
      to waste time searching all over again for that item you loved on your
      phone the other day - it's all here in one place!
    </p>
  </div>
</template>

<style lang="scss" scoped>
.wish-list-empty {
  @include container($w-header);

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
  max-width: 65rem;
  text-align: center;
  width: 100%;

  &__sub-header {
    font-size: 2.5rem;
    line-height: 5rem;
    margin-bottom: 2rem;
  }

  &__paragraph {
    font-size: 1.6rem;
  }
}
</style>
