<template>
  <output
    class="v-output sm:text-2xl md:text-3xl leading-loose"
    data-testid="output-el"
  >
    <slot name="slot:text"> Empty text </slot>
  </output>
</template>

<style scoped lang="postcss">
.v-output {
  &:first-letter {
    text-transform: uppercase;
  }
}
</style>
