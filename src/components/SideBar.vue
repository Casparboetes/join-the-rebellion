<script lang="ts" setup></script>

<template>
  <div class="side-bar">
    <ul class="side-bar__menu">
      <li><strong>Sidebar 1</strong></li>
      <li class="side-bar__menu-item">
        <a> Item 2 </a>
      </li>
      <li class="side-bar__menu-item">
        <a> Item 1 </a>
      </li>
      <li class="side-bar__menu-item">
        <a> Item 3 </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.side-bar {
  width: 10rem;
  height: fit-content;
  transform: translateX(-10rem) translateY(14rem);
  right: 10rem;
}
</style>
