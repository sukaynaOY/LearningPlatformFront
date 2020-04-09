import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { SignUpComponent } from 'src/app/shared/components/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule,MatInputModule, MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    MatCardModule,
  MatInputModule,
  MatButtonModule
  ]
})
export class WelcomeModule { }
