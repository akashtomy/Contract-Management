import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit {

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

  Files :any [] = [];

  constructor(    private dialogRef: MatDialogRef<AddContractComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {  } , 
    public spinner: NgxSpinnerService) { }

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
    
    this.dialogRef.close(true);
  }

  onClose(){
    this.dialogRef.close();
  }

  onFileSelected(event:any){
    console.log(event);


    if (event?.target?.files && event?.target?.files[0]) {
      // this.spinner.show();
      const reader = new FileReader();
      // const file: File = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      // this.selectedFile = new ImageSnippet(event.target.result, file);
      reader.onload = () => { // called once readAsDataURL is completed

        // this.prodLogoUrl = reader.result;
        this.Files.push(reader.result);
        this.contractForm.value.file = reader.result;
        console.log(this.Files);
        
        // this.spinner.hide();
      };
    }
    

  }

}
