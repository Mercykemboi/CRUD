import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
addStudentsFormGroup:FormGroup;
 
student: Student = new Student();
   constructor(private formBuilder: FormBuilder, private http: HttpClient) {

    this.addStudentsFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required],
      emailName: ['', Validators.required],

    });
  
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
Students(){
  let data = {
    firstName: this.addStudentsFormGroup.value.firstName,
    lastName: this.addStudentsFormGroup.value.lastName,
    emailName: this.addStudentsFormGroup.value.emailName,

};
return data;
}
addDetails(){
  let data = this.Students();
  this.http.post('http://localhost:8080/postStudents', data).subscribe(
    (response) => console.log(response),
    (error) => console.log(error))
}
}
