import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {DialogComponent} from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

const MATERIALMODULE = [MaterialModule];
const IMPORTMODULES = [
  BrowserModule,
  MaterialModule,
  BrowserAnimationsModule,
  HttpClientModule,
  DragDropModule,
  MatDialogModule,
  MatIconModule,
  MatGridListModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  FormsModule
];
const APPCOMPONENT = [AppComponent];

@NgModule({
  declarations: [...APPCOMPONENT, DialogComponent],
  imports: [
    ...IMPORTMODULES
  ],
  exports: [...MATERIALMODULE],
  providers: [],
  bootstrap: [...APPCOMPONENT]
})
export class AppModule { }
