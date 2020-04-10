import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from 'src/app/_services/beneficiary.service';
import { Training } from 'src/app/models/training';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Element } from 'src/app/models/element';

@Component({
  selector: 'app-mesformation',
  templateUrl: './mesformation.component.html',
  styleUrls: ['./mesformation.component.scss']
})
export class MesformationComponent implements OnInit {

  constructor(private beneficiaryService : BeneficiaryService,private tokenStorageService:TokenStorageService) { }

  myTraining : Array<Training> = new Array<Training>();
  elements : Array<Element> = new Array<Element>();
  courses : Array<Training> = new Array<Training>();
  show:Array<boolean> = new Array<boolean>();
  

  ngOnInit() {
    this.getMyTraining();
  }


  getMyTraining(){
    this.beneficiaryService.myTrainings(this.tokenStorageService.getUser().id).subscribe(data => {

      data.forEach(element => {
        
        let t = <Training>element;
        this.show.push(false);
        this.courses.push(t);
      });
      console.log("g")
      console.log(this.courses)
    });
    // this.beneficiaryService.getelements(this.tokenStorageService.getUser().id).subscribe(data =>{

    //   (<Array<Element>>data).forEach(x=>{

    //     let exist = false;

    //     this.myTraining.forEach(training => {
          
    //       if(training.id == x.training.id)
    //       {
    //         if(training.elements == null)
    //         training.elements = new Array<Element>();
    //         training.elements.push(x);
    //         exist=true;
    //       }

    //     });

    //     if(!exist){
    //       let tmpT = x.training;
    //       if(tmpT.elements == null)
    //       tmpT.elements = new Array<Element>();
    //       tmpT.elements.push(x)
    //       this.myTraining.push(tmpT);
    //     }
        
        

    //       })

    //   console.log(this.myTraining)
    // })

  }
  showelement(i){

    if(this.show[i])
    this.show[i]=false;
    else
    this.show[i]= true;
  }

  supprimerElement(id){
    this.beneficiaryService.delete(id,this.tokenStorageService.getUser().id).subscribe(data =>{
      console.log(data)
    })
    console.log(id);
  }

}