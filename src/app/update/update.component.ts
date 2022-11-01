import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id!:number;
  // updateStudentsFormGroup:FormGroup;
  student: Student = new Student();
  // router: any;
  constructor(private StudentService: StudentService, private route: ActivatedRoute, private formBuilder: FormBuilder, private http: HttpClient) { 
  //   this.updateStudentsFormGroup = this.formBuilder.group({
  //     firstName: new FormControl('', Validators.required), 
  //     lastName: new FormControl('',Validators.required),
  //     emailName:new  FormControl('', Validators.required),

  //   });
  }

  ngOnInit(): void {
//     this.id = this.route.snapshot.params['id']
//     this.StudentService.getStudentbyId(this.id!).subscribe( data=>{
// this.student = data;
//     }, error => console.error());
    
  }
  updateDetails(value: any){
    let data = {
      firstName:value.firstName,
      lastName:value.lastName,
      emailName:value.emailName 
    }
    this.StudentService.updateDetails(data, this.id)
    .subscribe(response => {
      // console.log(response)
    })
}
  }

  // students(){
  //   let data = {
  //     firstName: this.updateStudentsFormGroup.value.firstName,
  //     lastName: this.updateStudentsFormGroup.value.lastName,
  //     emailName: this.updateStudentsFormGroup.value.emailName,
  
  // };
  // return data;
  // }
  // updateStudents(){
  // this.StudentService.updateStudents(this.id!, this.student).subscribe(response=>{
  //   console.log(response)

  // }, error => console.error() );
 
  // }
  // update(id?: number){
  //   this.router.navigate(["/allStudents"])

  // }


