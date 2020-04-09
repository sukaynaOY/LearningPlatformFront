import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { TrainingService } from 'src/app/_services/training.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, private trainingService: TrainingService) { }

  private roles: string[];
  isLoggedIn = false;
  username: string;

  ngOnInit() { 
    console.log(this.tokenStorageService.getToken())

    if(this.tokenStorageService.getToken()){
      
      this.isLoggedIn = true;
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      

    }

  }

}
