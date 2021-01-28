import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DialogComponent } from '../../dialog/dialog.component';
const MATERIALMODULES = [MatTableModule];

@NgModule({
  imports: [...MATERIALMODULES],
  declarations: [],
  exports: [...MATERIALMODULES]
})
export class MaterialModule { }
