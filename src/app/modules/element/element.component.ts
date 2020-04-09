import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Element } from 'src/app/models/element';
import { EventEmitterService } from 'src/app/_services/event-emitter.service';


@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

 @Input() element : Element;

  constructor(private eventEmitterService: EventEmitterService ) { }

  ngOnInit() {
   
  }

  firstComponentFunction(){    
    this.eventEmitterService.onFirstComponentButtonClick();    
  }  
}
