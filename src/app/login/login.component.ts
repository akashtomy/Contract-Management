import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    userId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  showPassword = false;

  loginObj = 'https://media.allure.com/photos/64414d95368b1f00c23d62d0/1:1/w_4500,h_4500,c_limit/megan%20fox%20instagram%20nails%20taurus%20zodiac.jpg'

  constructor( public spinner: NgxSpinnerService,
    public router: Router,
    ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide()
    }, 1000);
  }

  login()  {
    this.router.navigate(['/dashboard']);
  }
  showHideToggle(event: any) {
    event.stopPropagation();
    this.showPassword = !this.showPassword;
  }

}
