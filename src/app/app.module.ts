import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from "./modules/home/home.module";
import { LoaderComponent } from './shared/components/loader/loader/loader.component';
import { FavBtnComponent } from './shared/components/buttons/fav-btn/fav-btn/fav-btn.component';
import { CollapseBtnComponent } from './shared/components/buttons/collapse-btn/collapse-btn/collapse-btn.component';
import { AuthDirective } from './shared/directives/auth.directive';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { SafePipe } from './shared/pipes/safe.pipe';
import { HeaderComponent } from './core/header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    FavBtnComponent,
    CollapseBtnComponent,
    AuthDirective,
    CapitalizePipe,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
