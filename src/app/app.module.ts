import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './state/reducers/index.reducer';
import { BooksEffects } from './state/effects/books.effects';
import { PokemonEffects } from './state/effects/pokemon.effects';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([BooksEffects, PokemonEffects]),
  ],
  declarations: [AppComponent, HomepageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
