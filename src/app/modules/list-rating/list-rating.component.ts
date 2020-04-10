import { Component, OnInit } from '@angular/core';
import { InstitutionRateService } from 'src/app/_services/institution-rate.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { DashboardService } from '../dashboard.service';
import { TrainerRateService } from 'src/app/_services/trainer-rate.service';
import { User } from 'src/app/models/user';
import { TrainerRate } from 'src/app/models/TrainerRate';
import { InstitutionRate } from 'src/app/models/InstitutionRate';
import { BeneficiaryService } from 'src/app/_services/beneficiary.service';
import { Training } from 'src/app/models/training';
import { Trainer } from 'src/app/models/Trainer';
interface ICompany {
  id: number;
  rating: number;
  name: string;
  img:string;
}
@Component({
  selector: 'app-list-rating',
  templateUrl: './list-rating.component.html',
  styleUrls: ['./list-rating.component.scss']
})
export class ListRatingComponent implements OnInit {
  ratingClicked: number;
  itemIdRatingClicked: string;
  trainerRate:TrainerRate;
  trainerid:number=0;
  courses : Array<Training> = new Array<Training>();
  show:Array<boolean> = new Array<boolean>();
  institutionRate:InstitutionRate;
  trainer: ICompany[] = [
    { 'id': 0, 'rating': 0, 'name':'skill'  ,'img':'../../../assets/skill.jpg'},
    { 'id': 1, 'rating': 0, 'name':'subject' ,'img':'../../../assets/Subject.png'},
    { 'id': 2, 'rating': 0, 'name':'kindness','img':'../../../assets/kind.jpeg'},
    
  ];
  institution: ICompany[] = [
    { 'id': 4, 'rating': 0, 'name':'workspace' ,'img':'../../../assets/the-workspace-group.jpg'},
    { 'id': 5, 'rating': 0, 'name':'property' ,'img':'../../../assets/logo-formation.png'},
    { 'id': 6, 'rating': 0, 'name':'equipment','img':'../../../assets/equipement.jpg'},
    
  ];
  ratingComponentClick(clickObj: any): void {
    const item = this.trainer.find(((i: any) => i.id === clickObj.itemId));
    if (!!item) {
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.name;
    }

  }
  ratingComponentClick1(clickObj: any): void {
    const item1 = this.institution.find(((i: any) => i.id === clickObj.itemId));
    if (!!item1) {
      item1.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item1.name;
      
    }

  }

  constructor(private beneficiaryService : BeneficiaryService,private institutionRateService: InstitutionRateService,private trainerRateService: TrainerRateService,private tokenStorage: TokenStorageService
    ,private dashboardService: DashboardService) { }

  ngOnInit() {
    this.trainerRate = new TrainerRate();
    this.institutionRate =  new InstitutionRate();
    this.beneficiaryService.rateTrainings(this.tokenStorage.getUser().id).subscribe(data => {

      data.forEach(element => {
        
        let t = <Training>element;
        this.show.push(false);
        this.courses.push(t);
      });
      console.log("g")
      console.log(this.courses)
    });
  }

  saveRatings(i){
    this.trainerRate.trainer= new  Trainer();
    this.trainerRate.trainer.id=this.trainerid;
    this.trainerRate.skill = this.trainer[0].rating;
       this.trainerRate.subject = this.trainer[1].rating;
       this.trainerRate.kindness = this.trainer[2].rating;
       this.institutionRate.institutionName= this.courses[i].hostInstitution;
       this.institutionRate.workspace=this.institution[0].rating;
       this.institutionRate.property=this.institution[1].rating;
       this.institutionRate.equipment=this.institution[2].rating;
       this.trainerRateService.create(this.trainerRate).subscribe(data=>{
      });
      this.institutionRateService.create(this.institutionRate).subscribe(data=>{
      });
  }
  showelement(i){
    if(this.show[i])
    this.show[i]=false;
    else
    this.show[i]= true;
    this.beneficiaryService.getTrainingTrainer(this.courses[i].id).subscribe(data => {
      this.trainerid = data;
      console.log(data+'   '+this.trainerid);  
   });
  }

}
