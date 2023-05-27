import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent implements OnInit {

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

  selectedIndex = 0;

  constructor(public spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onSave(){

    this.spinner.show()

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

  onChangeTab(selectedTab: MatTabChangeEvent) {
    this.selectedIndex = selectedTab.index;
  }

}
