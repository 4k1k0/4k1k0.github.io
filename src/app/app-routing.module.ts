import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './paginas/about/about.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  {
    path: 'not-me',
    loadComponent: () => import('./paginas/not-me/not-me.component').then(m => m.NotMeComponent)
  },
  {
    path: 'cv',
    loadComponent: () => import('./paginas/cv/cv.component').then(m => m.CvComponent)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
