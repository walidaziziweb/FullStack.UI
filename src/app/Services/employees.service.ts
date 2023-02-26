import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  
  baseApiUrl = 'https://localhost:7121/api/Employees/';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable <Employee[]>
  {
   return this.http.get<Employee[]>(this.baseApiUrl);
  }

  addEmployee(AddEmployeRequest: Employee): Observable<Employee> {
    AddEmployeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl , AddEmployeRequest);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + id)
  }
  
  UpdateEmployee(id: string, editEmployeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + id, editEmployeRequest);
  }
  DeleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + id);
  }
}
