<script lang="ts" setup></script>

<template>
  <div>
    <h1>Temp Nav</h1>
    <nav>
      <p>
        <router-link to="/product-overview">Product Overview</router-link>
        |
        <router-link to="/product-details">Product Details</router-link>
        |
        <router-link to="/wishlist">Wishlist</router-link>
      </p>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
