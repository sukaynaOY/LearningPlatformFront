import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/_services/training.service';
import { Training } from 'src/app/models/training';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses : Array<Training> = new Array<Training>();

  constructor(private trainingService : TrainingService) {}

  ngOnInit() {
    this.getAllAvailableTraining();
  }


  getAllAvailableTraining(){

    this.trainingService.getAlltraining().subscribe(data => {

      data.forEach(element => {
        
        let t = <Training>element;
        this.courses.push(t);
      });
      console.log("g")
      console.log(this.courses)
    })
  }

}
