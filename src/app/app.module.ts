import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {Child1Component} from './components/child-1/child-1.component';
import {Child11Component} from './components/child-1/child-11/child-11.component';

import {Child2Component} from './components/child-2/child-2.component';
import {Child22Component} from './components/child-2/child-22/child-22.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, Child1Component, Child11Component, Child2Component, Child22Component],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
})
export class AppModule {}
