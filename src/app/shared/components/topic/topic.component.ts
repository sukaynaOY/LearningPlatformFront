import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if(this.tokenStorage.getToken()){
      console.log("is loged")

    }
  }

}
