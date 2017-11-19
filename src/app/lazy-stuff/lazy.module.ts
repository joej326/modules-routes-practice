import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazySectionComponent } from './lazy-section/lazy-section.component';
import { LazyRoutesModule } from './lazy-routes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutesModule
  ],
  declarations: [LazyHomeComponent, LazySectionComponent]
})
export class LazyModule { }
