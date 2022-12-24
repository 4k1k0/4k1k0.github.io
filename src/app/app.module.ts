import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './paginas/about/about.component';
import { NotMeComponent } from './paginas/not-me/not-me.component';
import { CvComponent } from './paginas/cv/cv.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JobExperienceComponent } from './paginas/cv/job-experience/job-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NotMeComponent,
    CvComponent,
    JobExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
