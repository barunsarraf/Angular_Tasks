import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './scenario1/component1/component1.component';
import { Component2Component } from './scenario2/component2/component2.component';
import { Component1s3Component } from './scenario3/component1s3/component1s3.component';
import { Component2s3Component } from './scenario3/component2s3/component2s3.component';
import { Component1s4Component } from './scenario4/component1s4/component1s4.component';
import { Component2s4Component } from './scenario4/component2s4/component2s4.component';
import { Component1s5Component } from './scenario5/component1s5/component1s5.component';
import { Component2s5Component } from './scenario5/component2s5/component2s5.component';
import { Component3s5Component } from './scenario5/component3s5/component3s5.component';
import { Component1s6Component } from './scenario6/component1s6/component1s6.component';
import { Component2s6Component } from './scenario6/component2s6/component2s6.component';
import { Component3s6Component } from './scenario6/component3s6/component3s6.component';



@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component1s3Component,
    Component2s3Component,
    Component1s4Component,
    Component2s4Component,
    Component1s5Component,
    Component2s5Component,
    Component3s5Component,
    Component1s6Component,
    Component2s6Component,
    Component3s6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
