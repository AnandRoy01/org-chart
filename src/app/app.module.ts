import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaintaskComponent } from './maintask/maintask.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    MaintaskComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
