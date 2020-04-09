import { Component, OnInit, Input } from '@angular/core';
import { TrainingService } from 'src/app/_services/training.service';
import { Training } from 'src/app/models/training';
import { Router, ActivatedRoute } from '@angular/router';
import { Element } from 'src/app/models/element';
import { BeneficiaryService } from 'src/app/_services/beneficiary.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { keyValuesToMap } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { Beneficiary } from 'src/app/models/beneficiary';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.scss']
})
export class CoursedetailComponent implements OnInit {

  @Input() currenttrainingId : number;
  currenttraining : Training;
  elementTest = new Array<{key:Element, value:boolean}>();
  total:number=0;

  constructor(private tokenStorageService: TokenStorageService,private trainingService : TrainingService,private router: Router , private route: ActivatedRoute, private beneficiaryService:BeneficiaryService) { }

  ngOnInit() {
    this.getCurrenttraining(this.route.snapshot.paramMap.get('id'));
  }

  getCurrenttraining(id : string){

this.trainingService.get(id).subscribe(data => {

  this.currenttraining = <Training>data;

  this.currenttraining.elements.forEach(x =>{
var test = {key:x, value:false}
    this.elementTest.push(test)

  })

  console.log(this.elementTest.length)
})
  }



  saveTraining(){

        let benefeciary : Beneficiary;
        this.beneficiaryService.getById(this.tokenStorageService.getUser().id).subscribe(data =>{

          benefeciary = <Beneficiary>data;
          benefeciary.elements = new Array<Element>()
          this.elementTest.forEach(x =>{

            if(x.value)
            benefeciary.elements.push(x.key)

           
   })
  
  this.beneficiaryService.create(benefeciary).subscribe
  (x =>{
  
    console.log(x);
  })
        });

        


}
sum(){
  this.total=0;
  for(let i=0;i<this.elementTest.length;i++){
    if(this.elementTest[i].value)
    this.total+=this.elementTest[i].key.price;

  }
}

}


