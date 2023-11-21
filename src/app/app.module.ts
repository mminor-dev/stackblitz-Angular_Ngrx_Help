import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LetDirective, PushPipe } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { BooksEffects, PokemonEffects } from './+state';
import { appReducer } from './+state/app-state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    LetDirective,
    PushPipe,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([BooksEffects, PokemonEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  declarations: [AppComponent, HomepageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
