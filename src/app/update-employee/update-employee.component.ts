import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  employee: Employee = new Employee();

  ngOnInit(): void {
    this.employeeService.getEmployee(+this.router.url.split('/')[2]).subscribe(employee => {
      this.employee = employee;
    }, error => console.log(error));
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.employee).subscribe(employee => {
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
    this.updateEmployee();
  }
}
