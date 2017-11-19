import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StartComponent } from './start/start.component';
import { ParamsComponent } from './params/params.component';
import { ChildComponent } from './child/child.component';
import { LazyModule } from './lazy-stuff/lazy.module';


const appRoutes = [
  {path: '', component: StartComponent},
  {path: 'lazy', loadChildren: './lazy-stuff/lazy.module#LazyModule'},
  {path: 'test', component: TestComponent, children: [
    {path: 'child', component: ChildComponent},
    {path: ':id', component: ParamsComponent}
  ]},
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutesModule { }
