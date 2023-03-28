import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from 'src/app/layout/main-layout/main-layout.component';
import {HomePageComponent} from 'src/app/pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: 'home', component: HomePageComponent}
    ]},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
