import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { HomeComponent } from './components/home/home.component';
import { TopicComponent } from './components/topic/topic.component';
import { CourseComponent } from './components/topic/course/course.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MesformationComponent } from './components/mesformation/mesformation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    HomeComponent,
    CourseComponent,
    TopicComponent,
    MesformationComponent,

  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    HomeComponent,
    CourseComponent,
    TopicComponent
  ]
})
export class SharedModule { }
