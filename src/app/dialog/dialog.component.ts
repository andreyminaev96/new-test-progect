import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface IDialogData{
 element: IDialogElement;
}
export interface IDialogElement{
  name: string;
  money: string;
};
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogData) {}
}
