import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './core/accueil/accueil.component';
import { CourseComponent } from './core/course/course.component';
import { ForumComponent } from './core/forum/forum.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: AccueilComponent,
    children: [{ path: 'course', component: CourseComponent }],
  },
  { path: 'forum', component: ForumComponent },

  { path: '**', redirectTo: 'accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
