import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-revenuesummery',
  templateUrl: './revenuesummery.component.html',
  styleUrls: ['./revenuesummery.component.scss']
})
export class RevenuesummeryComponent implements OnInit {
  displayedColumns: string[] = ['contractName', 'startDate', 'endDate', 'invested' , 'proFit', 'loss', 'status' ];
  dataSource!: MatTableDataSource<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
