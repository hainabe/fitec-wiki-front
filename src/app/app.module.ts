import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/layout/header/header.component';
import {AppRoutingModule} from './/app-routing.module';
import {HomeComponent} from './mods/home/home.component';
import {FooterComponent} from './shared/layout/footer/footer.component';
import {HomeModule} from './mods/home/home.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
