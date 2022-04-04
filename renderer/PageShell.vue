<template>
  <div class="layout">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="postcss">
.layout {
  @apply
    grid
    grid-cols-1
    auto-rows-auto
    place-content-start
    place-items-center
    place-self-center;

  inline-size: 100%;
  block-size: 100%;
  min-block-size: 100vh;
  padding-block-start: 3rem;

  background-color: var(--blue-color);
}

.content {
  @apply
    w-full;
}
</style>
