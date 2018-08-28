import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './mods/home/home.component';

const routes: Routes = [
  // {path: 'products', component: ProductListComponent},
  // {path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    // CommonModule,
    // BrowserModule,
    RouterModule.forRoot(
      routes,
      {preloadingStrategy: PreloadAllModules}
    )],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
