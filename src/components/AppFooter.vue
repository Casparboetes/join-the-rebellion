<script lang="ts" setup></script>

<template>
  <div class="footer">
    <section class="footer__container">
      <div class="footer__quote">
        "“Are you ready for tech with a bite? Our products are designed to
        revolutionize the way you work and play. With cutting-edge technology
        and a commitment to quality, we’re the perfect partner for anyone who
        wants to stay ahead of the curve. Join the rebellion today and
        experience the power of tech with a bite!”" <span>ChatGP 4</span>
      </div>
      <img class="footer__company-logo" src="@/assets/rebellion.png" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $c-white;

  &__container {
    display: flex;
    justify-content: flex-end;
  }

  &__quote {
  }

  &__company-logo {
  }
}
</style>
