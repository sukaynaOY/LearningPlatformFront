import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router,private authService: AuthService, private tokenStorage: TokenStorageService) { }

 // email = new FormControl('', [Validators.required, Validators.email]);
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles = ["ROLE_FORMATEUR","ROLE_BENEFICIARE"];
  templateUnchecked = "ROLE_FORMATEUR";
  templateChecked = "ROLE_BENEFICIARE";
  ngOnInit() {
  }
  onOpen(event: any) {
    console.log(event);
  }

  

  onSubmit() {
    this.errorMessage = '';
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
         this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
