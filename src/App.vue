<script lang="ts" setup></script>

<template>
  <div>
    <h1>Temp Nav</h1>
    <p>
      <router-link to="/product-list">Product Overview</router-link>
      |
      <router-link to="/product-details">Product Details</router-link>
      |
      <router-link to="/wishlist">Wishlist</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
