import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
   pdfList:any [] = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},

   ]

   displayedColumns: string[] = ['documentName', 'type', 'uploadDate' , 'action' ];
   dataSource!: MatTableDataSource<any>;
  searchTerm = new FormControl();

  constructor() { }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource(this.pdfList)
  }

}
