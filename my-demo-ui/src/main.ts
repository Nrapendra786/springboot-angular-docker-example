import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

///platformBrowserDynamic().bootstrapModule(AppModule)

///platformBrowserDynamic().bootstrapModule(AppModule)
///  .catch(err => console.error(err));


platformBrowserDynamic().bootstrapModule(AppModule, {
    providers: [provideAnimations()],
})
    .catch((err) => console.log(err));