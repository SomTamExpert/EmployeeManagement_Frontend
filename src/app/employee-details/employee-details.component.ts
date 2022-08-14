import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  employee : Employee = new Employee();

  ngOnInit(): void {
    this.employeeService.getEmployee(+this.router.url.split('/')[2]).subscribe(employee => {
      this.employee = employee;
    }, error => console.log(error));
  }

}
