import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router,private tokenStorage: TokenStorageService) { }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  signOut(){
console.log("signOut")
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
