import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllPersonsComponent } from './all-persons/all-persons.component';
import { SelectedPersonsComponent } from './selected-persons/selected-persons.component';

const routes: Routes = [
  {
    path: '', //default route.
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
   component: HomeComponent
  },
  {
    path: 'persons', 
    component: AllPersonsComponent
  },
  {
    path: 'personsCriteria', 
    component: SelectedPersonsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
