<script lang="ts" setup></script>

<template>
  <AppHeader :navItems="navItems" class="app__header" />

  <div class="content">
    <!--    <h1>Temp Nav</h1>-->
    <!--    <nav>-->
    <!--      <p>-->
    <!--        <router-link to="/product-overview">Product Overview</router-link>-->
    <!--        |-->
    <!--        <router-link to="/product-details">Product Details</router-link>-->
    <!--        |-->
    <!--        <router-link to="/wish-lists">Wish Lists</router-link>-->
    <!--      </p>-->
    <!--    </nav>-->
    <router-view></router-view>
  </div>
</template>

<style scoped></style>