import type {PageContext} from './types';
import type {PageContextBuiltInClient} from 'vite-plugin-ssr/client';
import {createApp} from './app';
import {useClientRouter} from 'vite-plugin-ssr/client/router';
import '~assets/css/index.css';

let app: ReturnType<typeof createApp>;

const {hydrationPromise} = useClientRouter({
  render(pageContext: PageContextBuiltInClient & PageContext) {
    if (!app) {
      app = createApp(pageContext);
      app.mount('#app');
    } else {
      app.changePage(pageContext);
    }

    if (!pageContext.isHydration) {
      document.title = pageContext.documentProps?.title ?? 'No title';
    }
  },
});

hydrationPromise;
