import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { FormationComponent } from 'src/app/modules/formation/formation.component';
import { ElementComponent } from 'src/app/modules/element/element.component';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {CoursedetailComponent} from "src/app/shared/components/topic/coursedetail/coursedetail.component"
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule, MatMenuModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ElementComponent,
    FormationComponent,
    CoursedetailComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
  MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
     MatMenuModule,
      MatListModule 

  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
