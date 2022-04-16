<template>
  <input
    v-bind="attrs"
    v-model="model"
    class="v-input"
    data-testid="input-el"
  >
</template>

<script setup lang="ts">
import {computed, useAttrs} from 'vue';

const attrs = useAttrs()
const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>();

const model = computed({
  get(): string {
    return props.modelValue;
  },

  set(newValue: string) {
    emit('update:modelValue', newValue);
  },
});
</script>

<style scoped lang="postcss">
.v-input {
  outline: none;
  padding: 1vmax;
  border-block-end: 2px solid var(--orange-color);

  background-color: transparent;
  color: var(--white-color);
  caret-color: var(--orange-color);

  transition: background-color .25s ease-in-out;

  &:focus-visible {
    background-color: var(--orange-color-op1);
  }
}
</style>
