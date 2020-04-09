import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { WelcomeComponent } from './layouts/welcome/welcome.component';
import { WelcomeModule } from './layouts/welcome/welcome.module';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { ListRatingComponent } from './modules/list-rating/list-rating.component';
import { RatingComponent } from './modules/rating/rating.component';
import { EventEmitterService } from './_services/event-emitter.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListRatingComponent,
    RatingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    WelcomeModule,
    FormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [authInterceptorProviders,EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }