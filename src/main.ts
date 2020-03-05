import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { FirebaseService } from '@services/firebase.service'

import { hmrBootstrap } from './hmr';

if (environment.production) {
  enableProdMode();
}

console.log('HOT RELOAD NOT ACCESS HERE');
FirebaseService.initializeApp();

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.error('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap().catch(err => console.error(err));
}
