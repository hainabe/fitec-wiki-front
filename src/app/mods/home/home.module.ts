import {NgModule} from '@angular/core';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from '../../app-routing.module';
import {SharedModule} from '../../shared/shared.module';

import {HomeComponent} from './home.component';



@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    // HomeComponent
  ],
  providers: []
})
export class HomeModule {
}
