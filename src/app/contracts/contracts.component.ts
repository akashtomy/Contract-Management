import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AddContractComponent } from './add-contract/add-contract.component';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  displayedColumns: string[] = ['contractName', 'startDate', 'endDate', 'location',  'budget', 'status' ];
  dataSource!: MatTableDataSource<any>;
  searchTerm = new FormControl();
  constructor( private dialog: MatDialog,
    public spinner: NgxSpinnerService,
    private router:Router) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide()
    }, 1000);

    const contracts:any  = localStorage.getItem('contract')
    this.dataSource = new MatTableDataSource (JSON.parse(contracts));
    console.log(this.dataSource);
    this.searchTerm.valueChanges.subscribe(result=>{
      console.log(result);
      this.applyFilter(result)
      
    })
  }

  addContract(){
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open( AddContractComponent
      , {
      width: '45%',
      disableClose: true,
      autoFocus: true,
      data: {
        data: '',
        type: 'edit',
      },
    });

    dialogRef.afterClosed().subscribe((data) => {
      this.spinner.hide()
      console.log(data);
      const contracts:any  = localStorage.getItem('contract')
      this.dataSource = new MatTableDataSource (JSON.parse(contracts));
      console.log(this.dataSource);
      

      
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onRow(){
      this.router.navigate(['dashboard/agreement-details']);
  }

}
