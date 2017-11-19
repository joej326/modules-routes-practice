import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetApiService } from './get-api.service';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './app-routes.module';
import { StartComponent } from './start/start.component';
import { ParamsComponent } from './params/params.component';
import { ChildComponent } from './child/child.component';
import { LazyModule } from './lazy-stuff/lazy.module';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StartComponent,
    ParamsComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    LazyModule
  ],
  providers: [GetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
