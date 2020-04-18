import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { WelcomeComponent } from './layouts/welcome/welcome.component';
import { CourseComponent } from './shared/components/topic/course/course.component';
import { TopicComponent } from './shared/components/topic/topic.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';
import { ElementComponent } from './modules/element/element.component';
import { FormationComponent } from './modules/formation/formation.component';
import { CoursedetailComponent } from './shared/components/topic/coursedetail/coursedetail.component';
import { ListRatingComponent } from './modules/list-rating/list-rating.component';
import { MesformationComponent } from './shared/components/mesformation/mesformation.component';
import { PostsComponent } from './modules/posts/posts.component';
import { MonprofileComponent } from './shared/components/monprofile/monprofile.component';
import { UpdateFormationComponent } from './modules/formation/update-formation/update-formation.component';
import { ChercherformationComponent } from './modules/chercherformation/chercherformation.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    
    children: [
      {
        path: '',
        component: HomeComponent

      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      }
    ]
  },
  {
    path: 'default',
    component: DefaultComponent,
    
    children: [
      {
        path: 'formation',
        component: FormationComponent
      },
      {
        path: 'updateFormation',
        component: UpdateFormationComponent
      },
      {
        path: 'updateFormation/:id',
        component: UpdateFormationComponent
      },
      {
        path: 'course',
        component: CourseComponent
      },
      {
        path: 'list',
        component: ListRatingComponent
      },
      {
        path: 'mesformation',
        component: MesformationComponent
      },
      {
        path: 'coursedetail',
        component: CoursedetailComponent
      },
      {
        path: 'coursedetail/:id',
        component: CoursedetailComponent
      },
      {
        path: 'dash',
        component: DashboardComponent
      },
      {
        path: 'post',
        component: PostsComponent
      },
      {
        path: 'monprofile',
        component: MonprofileComponent
      },
      {
        path: 'chercherformation',
        component: ChercherformationComponent
      }
      
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
