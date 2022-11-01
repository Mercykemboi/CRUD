import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  public Students: Student[] | undefined
  constructor( private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data: Student[]) =>{
      this.Students = data;
      console.log(data)
    }
    )
  }
  update(id: number){
    this.router.navigate(["update", id])

  }

}
