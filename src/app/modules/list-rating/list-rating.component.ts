import { Component, OnInit } from '@angular/core';
import { InstitutionRateService } from 'src/app/_services/institution-rate.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { DashboardService } from '../dashboard.service';
import { TrainerRateService } from 'src/app/_services/trainer-rate.service';
import { User } from 'src/app/models/user';
import { TrainerRate } from 'src/app/models/TrainerRate';
import { InstitutionRate } from 'src/app/models/InstitutionRate';
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

  constructor(private institutionRateService: InstitutionRateService,private trainerRateService: TrainerRateService,private tokenStorage: TokenStorageService
    ,private dashboardService: DashboardService) { }

  ngOnInit() {
    this.trainerRate = new TrainerRate();
    this.institutionRate =  new InstitutionRate();
  }

  saveRatings(){
    let user = new  User();
    user.id = this.tokenStorage.getUser().id;
    this.trainerRate.skill = this.trainer[0].rating;
    this.trainerRate.subject = this.trainer[1].rating;
    this.trainerRate.kindness = this.trainer[2].rating;
    this.trainerRate.trainer = user;
    this.institutionRate.workspace=this.institution[0].rating;
    this.institutionRate.property=this.institution[1].rating;
    this.institutionRate.equipment=this.institution[2].rating;
    this.trainerRateService.create(this.trainerRate).subscribe(data=>{
    })
    this.institutionRateService.create(this.institutionRate).subscribe(data=>{

    })


  }

}
