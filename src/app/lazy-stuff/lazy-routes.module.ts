import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazySectionComponent } from './lazy-section/lazy-section.component';
import { RouterModule } from '@angular/router';


const lazyRoutes = [
  {path: '', component: LazyHomeComponent, children: [
    {path: 'lazy-section1', component: LazySectionComponent} // MUST HAVE CHILDREN SOMEWHERE FOR LAZY-LOADING
  ]},
  

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lazyRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class LazyRoutesModule { }
