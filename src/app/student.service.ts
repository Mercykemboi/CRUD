import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080/getStudent"
  private baseUrl1 = "http://localhost:8080/update/id"
  
  constructor(private http:HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl);
  }
  getStudentbyId(id: number):Observable<Student>{
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }
  updateDetails(data: Student, id:number): Observable<object>{
return this.http.put(`${this.baseUrl1}/${id}`, data)

  }
}
