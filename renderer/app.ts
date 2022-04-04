/* eslint-disable require-jsdoc */

import type {App} from 'vue';
import type {PageContext, Component} from './types';
import {createSSRApp, defineComponent, h, markRaw, reactive} from 'vue';
import PageShell from './PageShell.vue';
import {setPageContext} from './usePageContext';

interface ChangePage {
  changePage: (pageContext: PageContext) => void
}

export {createApp};

function createApp(pageContext: PageContext): App & ChangePage {
  const {Page, pageProps} = pageContext;

  let rootComponent: Component;

  const PageWithLayout = defineComponent({
    data() {
      return {
        Page: markRaw(Page),
        pageProps: markRaw(pageContext.pageProps || {}),
      };
    },

    created() {
      rootComponent = this;
    },

    render() {
      return h(
          PageShell,
          {},
          {
            default() {
              return h(Page, pageProps || {});
            },
          },
      );
    },
  });

  const app = <App<Element> & ChangePage>createSSRApp(PageWithLayout);

  app.provide('$pgCtx', pageContext);

  const pageContextReactive = reactive(pageContext);

  const changePageObj: ChangePage = {
    changePage: (pageContext: PageContext) => {
      Object.assign(pageContextReactive, pageContext);
      rootComponent.Page = markRaw(pageContext.Page);
      rootComponent.pageProps = markRaw(pageContext.pageProps || {});
    },
  };

  Object.assign(app, changePageObj);

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext);

  return app;
}
