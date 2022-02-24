import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentListComponent} from './student-list/student-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: StudentListComponent
  },
  {
    path: 'detail',
    component: StudentDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
