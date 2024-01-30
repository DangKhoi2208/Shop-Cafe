import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {provideState, provideStore} from '@ngrx/store';
import {cartReducer} from "./ngrx/cart/cart.reducer";

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideRouter(routes), importProvidersFrom(TuiRootModule), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "shopcafe-f9b43", "appId": "1:190661831936:web:555c173d34b61e436c97e5", "storageBucket": "shopcafe-f9b43.appspot.com", "apiKey": "AIzaSyCwkH8VgcfgqPeg-m_HtYNc5tdV_6AioPA", "authDomain": "shopcafe-f9b43.firebaseapp.com", "messagingSenderId": "190661831936", "measurementId": "G-KXV3D6DPVX" }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage())), provideStore(),  provideState({ name: 'cart', reducer: cartReducer }),]
};

