import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideStoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideStoreDevtools(),
    provideEffects([]),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(
      // configure NgRx modules
      StoreModule.forRoot({
      }),
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot([])
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
  ],
};
