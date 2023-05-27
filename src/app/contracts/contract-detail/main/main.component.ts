import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  contractForm : FormGroup = new FormGroup({
    contractName: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    location: new FormControl(''),
    budget: new FormControl(''),
    file: new FormControl(''),
    contractorName: new FormControl(''),
    description: new FormControl(''),
    status:new FormControl(''),

  });

  displayedColumns: string[] = ['contractorName', 'contNo', 'action' ];
  dataSource!: MatTableDataSource<any>;
   vendors:any =[]
  constructor() { }

  ngOnInit(): void {
  }

  onSave(){

    // this.spinner.show()

     let a : any  = localStorage.getItem('contract');
    let contracts = [];
    contracts = JSON.parse(a)?JSON.parse(a): [];
    // this.dataSource = new MatTableDataSource (JSON.parse(contracts));

    const startDate =   moment(this.contractForm.value.startDate).format('MM-DD-YYYY');
    console.log(startDate);
    

    this.contractForm.get('startDate')?.setValue(startDate);

    const endDate =   moment(this.contractForm.get('endDate')?.value).format('MM-DD-YYYY');

    this.contractForm.get('endDate')?.setValue(endDate);

    console.log(this.contractForm.value);


    contracts.push(this.contractForm.value);

    localStorage.setItem('contract', JSON.stringify(contracts))
  }

  addVendors(){

  
    this.vendors.push({})

    this.dataSource = new MatTableDataSource (this.vendors);

  }

}
