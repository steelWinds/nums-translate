<template>
  <article class="main-page grid grid-row-3 place-items-center">
    <div class="flex flex-row place-items-center mb-6 md:mb-12">
      <h1
        class="
        text-2xl sm:text-4xl md:text-5xl
        text-orange text-center"
      >
        Typing your number
      </h1>

      <a
        href="https://github.com/steelWinds/nums-to-words-ru-lang"
        title="Link to git-hub repo this lib"
      >
        <img
          src="/src/assets/images/PNG/git-icon.png"
          alt="Github icon"
          class="w-9 sm:w-12 md:w-16 ml-5 aspect-square"
        >
      </a>
    </div>

    <VNumberInput
      v-model="converterModel"
      class="w-full max-w-lg text-center"
    />

    <VOutput
      class="
      text-white
        mt-6
        max-w-md
        text-center
        text-base
        justify-self-center
        px-4"
    >
      <template #slot:text>
        {{ convertedWords }}
      </template>
    </VOutput>
  </article>
</template>

<script lang="ts" setup>
import {defineAsyncComponent} from 'vue';
import {useNumsConverter} from '~composables/useNumsConverter';

const VNumberInput = defineAsyncComponent(
    () => import('~components/UI/VNumberInput.vue'),
);
const VOutput = defineAsyncComponent(
    () => import('~components/UI/VOutput.vue'),
);

const {converterModel, convertedWords} = useNumsConverter();
</script>
