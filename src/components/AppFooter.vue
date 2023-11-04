<script lang="ts" setup></script>
<template>
  <section class="footer">
    <div class="footer__container">
      <div class="footer__quote">
        “Join the Rebellion today and experience the power of tech with a bite!”
        <br /><span class="footer__quote-by-who"> - ChatGPT 4</span>
      </div>

      <div class="footer__logo-container">
        <img
          alt="Rebellion Logo"
          class="footer__company-logo"
          src="@/assets/rebellion.png"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  align-items: center;
  background-color: $c-rebel-grey;
  min-height: fit-content;

  &__container {
    @include container($w-header);

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__quote {
    font-family: 'Darker Grotesque', serif;
    font-size: 3rem;
    margin: 4rem 2rem;
  }

  &__quote-by-who {
    float: right;
  }

  &__logo-container {
    display: flex;
    float: right;
    justify-content: flex-end;
    margin: 2rem;
  }

  &__company-logo {
    height: 10rem;
    width: 10rem;
  }

  @include screen($screen-simple) {
    &__container {
      flex-direction: row;
      padding-top: 4rem;
    }

    &__logo-container {
      margin: 4rem 2rem;
    }

    &__company-logo {
      height: 12.5rem;
      width: 12.5rem;
    }
  }
}
</style>
