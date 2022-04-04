/* eslint-disable require-jsdoc */

import {inject} from 'vue';
import type {App} from 'vue';
import {PageContext} from './types';

export {usePageContext};
export {setPageContext};

const key = Symbol();

function usePageContext() {
  const pageContext = inject(key);
  return pageContext;
}

function setPageContext(app: App, pageContext: PageContext) {
  app.provide(key, pageContext);
}
