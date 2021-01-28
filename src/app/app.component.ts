import {Component, OnInit, ViewChild} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';

export interface INotateElement {
  name: string;
  money: string;
}

function cloneObj<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

const ELEMENT_DATA: INotateElement[] = [
  { name: 'Hydrogen', money: '100$'},
  { name: 'Helium', money: '100$'},
  { name: 'Lithium', money: '100$'},
  { name: 'Beryllium', money: '100$'},
  { name: 'Boron', money: '100$'},
  { name: 'Carbon', money: '100$'},
  { name: 'Nitrogen', money: '100$'},
  { name: 'Oxygen', money: '100$'},
  { name: 'Fluorine', money: '100$'},
  { name: 'Neon', money: '100$'},
  { name: 'Hsssss', money: '100$'},
  { name: 'zzxzx', money: '100$'},
  { name: 'Lizxxzzxzsthium', money: '100$'},
  { name: 'Bwllium', money: '100$'},
  { name: 'Borq11on', money: '100$'},
  { name: 'Car22sabon', money: '100$'},
  { name: 'Nitasaarogen', money: '100$'},
  { name: 'Oxyddzsxzgen', money: '100$'},
  { name: 'Fluczxcorine', money: '100$'},
  { name: 'Neon', money: '100$'},
  { name: 'Hydrogen', money: '100$'},
  { name: 'Helium', money: '100$'},
  { name: 'Lithium', money: '100$'},
  { name: 'Beryllium', money: '100$'},
  { name: 'Boron', money: '100$'},
  { name: 'Carbon', money: '100$'},
  { name: 'Nitrogen', money: '100$'},
  { name: 'Oxygen', money: '100$'},
  { name: 'Fluorine', money: '100$'},
  { name: 'Neon', money: '100$'},
  { name: 'Hydrogen', money: '100$'},
  { name: 'Helium', money: '100$'},
  { name: 'Lithium', money: '100$'},
  { name: 'Beryllium', money: '100$'},
  { name: 'Boron', money: '100$'},
  { name: 'Carbon', money: '100$'},
  { name: 'Nitrogen', money: '100$'},
  { name: 'Oxygen', money: '100$'},
  { name: 'Fluorine', money: '100$'},
  { name: 'Neon', money: '100$'},
  { name: 'Hydrogen', money: '100$'},
  { name: 'Helium', money: '100$'},
  { name: 'Lithium', money: '100$'},
  { name: 'Beryllium', money: '100$'},
  { name: 'Boron', money: '100$'},
  { name: 'Carbon', money: '100$'},
  { name: 'Nitrogen', money: '100$'},
  { name: 'Oxygen', money: '100$'},
  { name: 'Fluorine', money: '100$'},
  { name: 'Neon', money: '100$'},
  { name: 'Hydrogen', money: '100$'},
  { name: 'Helium', money: '100$'},
  { name: 'Lithium', money: '100$'},
  { name: 'Beryllium', money: '100$'},
  { name: 'Boron', money: '100$'},
  { name: 'Carbon', money: '100$'},
  { name: 'Nitrogen', money: '100$'},
  { name: 'Oxygen', money: '100$'},
  { name: 'Fluorine', money: '100$'},
  { name: 'Nxxxxxxzzx', money: '100$'}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'money'];
  inputFullName: string;
  inputHowMuchShould: string;
  localDataSource = JSON.parse(localStorage.getItem('localDataSource'));
  dataSource = !this.localDataSource ? ELEMENT_DATA : this.localDataSource;
  currentDataSource: INotateElement[];
  paginationCount = 0;
  disabledButton = true;

  constructor(public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.innitSetting();
  }
  innitSetting(){
    if (this.localDataSource) { this.currentDataSource = [...this.localDataSource]; }
    else { this.currentDataSource = [...this.dataSource]; }
    this.setSettingPaginationTable();
  }
  drop(event: CdkDragDrop<INotateElement[]>) {
    moveItemInArray(this.dataSource, this.paginationCount + event.previousIndex, this.paginationCount + event.currentIndex);
    this.dataSource = [...this.dataSource];
    this.setSettingPaginationTable();
  }
  setSettingPaginationTable(){
    localStorage.setItem('localDataSource', JSON.stringify(this.dataSource));
    this.currentDataSource = this.dataSource.filter((el, idx) => idx >= this.paginationCount && idx < this.paginationCount + 10);
  }

  handlerPaginateButtonClick(info: string) {
    if (info === 'pre'){
      this.paginationCount -= 10;
      return this.setSettingPaginationTable();
    }
    this.paginationCount += 10;
    this.setSettingPaginationTable();
  }

  handlerClickAddNewNote() {
    this.dataSource.unshift({name: this.inputFullName, money: this.inputHowMuchShould});
    this.paginationCount = 0;
    this.setSettingPaginationTable();
    this.inputFullName = '';
    this.inputHowMuchShould = '';
  }

  handlerInputChange() {
    if (!this.inputFullName || !this.inputHowMuchShould) { return; }
    this.disabledButton = false;
  }

  openDialog(element) {
    const idx = this.dataSource.findIndex(ds => ds.name === element.name);
    const dialogRef = this.dialog.open(DialogComponent, {data: {element}});
    dialogRef.afterClosed().subscribe(({info, data}) => {
       if (info === 'edit') { return this.dataSource[idx] = data; }
       this.dataSource.splice(idx, 1);
       this.paginationCount = 0;
       this.setSettingPaginationTable();
    });
  }
}
