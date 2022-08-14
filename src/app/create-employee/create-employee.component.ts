import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    this.employeeService.createEmployee(this.employee).subscribe(employee => {
        console.log(employee);
        this.goToEmployeeList();
      },
      error => {
        console.log(error);
      },
    )
  }

  goToEmployeeList(): void {
    this.router.navigate(['/employees']);
  }

  onSubmit(): void {
    this.saveEmployee();
    this.goToEmployeeList();
  }
}
