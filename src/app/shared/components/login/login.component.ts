import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../_services/auth.service"
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private router: Router,private authService: AuthService, 
    private tokenStorage: TokenStorageService,
   ) {

     }

  ngOnInit() {
  }
  onOpen(event: any) {
    console.log(event);
  }

  

  onSubmit(){
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log(data)
         this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        //this.reloadPage();
        this.router.navigateByUrl('/default/formation');
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  
  }

  reloadPage() {
    window.location.reload();
  }



 
}
