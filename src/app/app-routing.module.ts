import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"addStudents" , component:AddStudentComponent},
  {path:"allStudents", component:AllStudentsComponent},
  {path:"", redirectTo:"addStudents", pathMatch:"full"},
  {path:"update/:id", component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
