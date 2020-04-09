import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;

  private roles: string[];
  isLoggedIn = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService,private router: Router) { }

  ngOnInit() { 
    console.log(this.tokenStorageService.getToken())

    if(this.tokenStorageService.getToken()){

      this.isLoggedIn = true;
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

    }else{

      this.router.navigateByUrl('/login');
    }

  }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
