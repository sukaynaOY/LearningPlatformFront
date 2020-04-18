import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/_services/training.service';
import { ElementService } from 'src/app/_services/element.service';
import { Training } from 'src/app/models/training';
import { element } from 'protractor';

@Component({
  selector: 'app-chercherformation',
  templateUrl: './chercherformation.component.html',
  styleUrls: ['./chercherformation.component.scss']
})
export class ChercherformationComponent implements OnInit {

  searchText: string;
  constructor(private elementService: ElementService) { }
  allTraining : Array<Training>  = new Array<Training>();
  filtredTraining : Array<Training>  = new Array<Training>();
  showResult = false;

  ngOnInit() {
    this.elementService.getalltraining().subscribe(data => {

      data.forEach(training => {
        this.allTraining.push(training);
      });
      //this.allTraining = data;
      //console.log(data)
    
    });
  }

  search(){
    this.filtredTraining = JSON.parse(JSON.stringify(this.allTraining));
    this.filtredTraining.forEach(training => training.elements = training.elements.filter(x=> x.subject.includes(this.searchText)));
    this.filtredTraining = this.filtredTraining.filter(x => x.elements.length>0);


console.log(this.filtredTraining)

this.showResult = true;
  }

}
