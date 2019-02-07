import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule, MatProgressBar, MatProgressBarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaintaskComponent } from './maintask/maintask.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ListComponent } from './list/list.component';
import { TreeComponent } from './tree/tree.component';
import {MatButtonModule, MatCheckboxModule, MatIconModule, } from '@angular/material';
import {MatTreeModule} from '@angular/material/tree';



@NgModule({
  declarations: [
    AppComponent,
    MaintaskComponent,
    ListComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
