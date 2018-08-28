import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    // FooterComponent,
    // HeaderComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    // FooterComponent,
    // HeaderComponent
  ]
})
export class SharedModule {
}
