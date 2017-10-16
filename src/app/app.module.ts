import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { HeaderComponentComponent } from './task/header-component/header-component.component';
import { NavComponentComponent } from './task/nav-component/nav-component.component';
import { MainComponentComponent } from './task/main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HeaderComponentComponent,
    NavComponentComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
