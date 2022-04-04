/* eslint-disable spaced-comment */
/// <reference types="vitest" />

import type {UserConfigExport} from 'vite';
import type {InlineConfig} from 'vitest';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import ssr from 'vite-plugin-ssr/plugin';
import path from 'path';

const resolve = path.resolve;

const config: UserConfigExport & InlineConfig = defineConfig({
  plugins: [vue(), ssr()],

  test: {
    environment: 'jsdom',
  },

  resolve: {
    alias: {
      '~components': resolve('./src/components'),
      '~assets': resolve('./src/assets'),
      '~composables': resolve('./src/composables'),
    },
  },
});

export default config;
