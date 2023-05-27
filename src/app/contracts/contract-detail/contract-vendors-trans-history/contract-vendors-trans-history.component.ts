import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contract-vendors-trans-history',
  templateUrl: './contract-vendors-trans-history.component.html',
  styleUrls: ['./contract-vendors-trans-history.component.scss']
})
export class ContractVendorsTransHistoryComponent implements OnInit {
  displayedColumns: string[] = ['contractorName', 'type', 'date' , 'amount' ];
  dataSource!: MatTableDataSource<any>;
  searchTerm = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
