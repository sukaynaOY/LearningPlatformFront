import { Component, OnInit, Input } from '@angular/core';
import { Training } from 'src/app/models/training';
import { Trainer } from 'src/app/models/Trainer';
import { TrainingService } from 'src/app/_services/training.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { DashboardService } from '../../dashboard.service';
import { EventEmitterService } from 'src/app/_services/event-emitter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BeneficiaryService } from 'src/app/_services/beneficiary.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.scss']
})
export class UpdateFormationComponent implements OnInit {
  modificationTraining: Training = new Training();
  modificationTrainingtriger: boolean = false;


  @Input() currenttrainingId: number;
  currenttraining: Training;
  show = false;
  elementTest = new Array<{ key: Element, value: boolean }>();
  currentTrainer: string;
  total: number = 0;
  constructor(private tokenStorageService: TokenStorageService,
    private trainingService: TrainingService, private router: Router,
    private route: ActivatedRoute,
    private beneficiaryService: BeneficiaryService,
  ) { }


  ngOnInit() {
    this.getCurrenttraining(this.route.snapshot.paramMap.get('id'));
  }

  getCurrenttraining(id: string) {

    this.trainingService.get(id).subscribe(data => {

      this.currenttraining = <Training>data;

      this.currenttraining.elements.forEach(x => {
        var test2 = { key: x, value: false }
      //  this.elementTest.push(test2)

      })

      console.log(this.currenttraining)

    })
  }

  modifier(t: Training) {

    this.modificationTraining = t;
    this.modificationTrainingtriger = true;
    this.modificationTraining.trainer = new Trainer();
    this.modificationTraining.trainer.id = this.tokenStorageService.getUser().id;
    console.log(this.modificationTraining);
  }
  appliquermodification(t: Training) {
    this.modificationTrainingtriger = false;
    this.trainingService.modifier(this.modificationTraining).subscribe(data => {
      console.log(data)
    })
    this.modificationTraining = new Training();
  }
}
