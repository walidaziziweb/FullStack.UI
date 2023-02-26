import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    salary: 0,
    phone: 0,
    department: ''
  };
  constructor(private employeesServices: EmployeesService, private router: Router) { }
  ngOnInit(): void {
  }
  addEmployee() {
    this.employeesServices.addEmployee(this.addEmployeeRequest)
      .subscribe({
        next: (employees) => {
          this.router.navigate(['/employees']);
        },
        error: (err) => {
          console.log(err);
        },
      })
  }
}
