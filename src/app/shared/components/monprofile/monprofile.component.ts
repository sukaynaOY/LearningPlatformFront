import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { TrainerService } from 'src/app/_services/trainer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/_services/user.service';
import {FormControl, Validators} from '@angular/forms'; 

@Component({
  selector: 'app-monprofile',
  templateUrl: './monprofile.component.html',
  styleUrls: ['./monprofile.component.scss']
})  
export class MonprofileComponent implements OnInit {


  title = 'File-Upload-Save';
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  pdfSrc = "/Users/anaslaamarti/benebene.pdf";
  constructor(private tokenStorageService: TokenStorageService,private trainerService : TrainerService) { }
  currentUser : any;

  ngOnInit() {

  this.trainerService.getTrainer(this.tokenStorageService.getUser().id).subscribe(data =>{

    this.currentUser = data;
  })

  console.log(this.currentUser);
  }

  downloadFile() {
    this.trainerService.getfile("benebene").subscribe(data => {
      let fileURL = URL.createObjectURL(data);
      window.open(fileURL, '_blank');
    })
  
  }

  updateTrainer(){
    this.trainerService.updateTrainer(this.currentUser).subscribe(data =>{
      if(this.selectedFiles != null)
      this.upload()
    })

  }

  change($event) {
    this.changeImage = true;
  }
  changedImage(event) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.trainerService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        //alert('File Successfully Uploaded');
      }
      this.selectedFiles = undefined;
    }
    );
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

}
