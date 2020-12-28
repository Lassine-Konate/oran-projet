import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './core/accueil/accueil.component';
import { DemarcheComponent } from './core/demarche/demarche.component';
import { ForumComponent } from './core/forum/forum.component';
import { Shared } from './shared.service';
import { CourseComponent } from './core/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    DemarcheComponent,
    ForumComponent,
    CourseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Shared],
  bootstrap: [AppComponent],
})
export class AppModule {}
