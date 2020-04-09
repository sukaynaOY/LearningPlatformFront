import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DashboardService } from '../dashboard.service';
import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/_services/training.service';
import { User } from 'src/app/models/user';
import { Element } from 'src/app/models/element';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { element } from 'protractor';
import { EventEmitterService } from 'src/app/_services/event-emitter.service';

export interface PeriodicElement {
  id: string;
  name: number;
  description: number;
  hostInstitution: string;

 
}



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

 courses : Array<Training> = new Array<Training>();

training: Training = new Training();
elementSize:number;
elements:Element[];
public isCollapsed = true;


 displayedColumns: string[] = ['id', 'name', 'description', 'hostInstitution'];
  dataSource = this.courses;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
 

  constructor(private trainingService: TrainingService,private tokenStorage: TokenStorageService
    ,private dashboardService: DashboardService,private eventEmitterService: EventEmitterService  ) { }
  //constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.training.elements = new Array<Element>();
    this.elementSize=0;
    this.training.price = 0;
    this.elements = new Array<Element>();
    this.getAllAvailableTraining();
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.calculatPrice();    
      });    
    }    
//this.retrieveTraining();
    //this.dataSource.paginator = this.paginator;
  }

  saveTraining(){
    let user = new  User();
    this.calculatPrice();
    user.id = this.tokenStorage.getUser().id;
    this.training.trainer = user;
    this.training.isConfirmed = false;
    for(let i=0;i<this.elementSize;i++){
      this.training.elements.push(this.elements[i]);
    }
    this.trainingService.create(this.training).subscribe(data =>{
      console.log(data)
    })
  }

  addElement(){
    this.elementSize++;
    this.elements.push(new Element());
  } 
  deleteElement(){
    if(this.elements.length>0){
      this.elementSize--;
      this.elements.pop();
    }
  }



  getAllAvailableTraining(){

    this.trainingService.getAlltraining().subscribe(data => {
      data.forEach(element => {
        let t = <Training>element;
        this.courses.push(t);
      });

    })

    this.dataSource = this.courses;
  }
 calculatPrice(){
   this.training.price=0;
   for(let i=0;i<this.elements.length;i++){
     this.training.price += this.elements[i].price; 
   }
 }
}
