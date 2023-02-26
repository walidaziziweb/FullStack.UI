import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  detEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    salary: 0,
    phone: 0,
    department: ''
  };
  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next: (param) => {
          const id = param.get('id');
          if (id) {
            this.employeeService.getEmployee(id)
              .subscribe({
                next: (Response) => {
                  this.detEmployeeRequest = Response;
                }
              }
              )
          }
        }
      })
  }
  UpdateEmployee() {
    this.employeeService.UpdateEmployee(this.detEmployeeRequest.id, this.detEmployeeRequest)
      .subscribe({
        next: (Response) => {
          this.router.navigate(['/employees']);
        }
      })
  }
  deleteEmployee(id: string) {
    this.employeeService.DeleteEmployee(id)
      .subscribe({
        next: (Response) => {
          this.router.navigate(['/employees']);
        }
      })
  }
}
