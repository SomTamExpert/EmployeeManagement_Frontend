import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employeeService.getEmployeesList().subscribe(employees => this.employees = employees);
    console.log(this.employees);
  }

  updateEmployee(employeeId: number | undefined): void {
    this.router.navigate(['/update-employee', employeeId]);
  }
  deleteEmployee(employeeId: number | undefined): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(() => {
      this.getEmployees();
    }
    );
  }
  showDetails(employeeId: number | undefined): void {
    this.router.navigate(['/employee-details', employeeId]);
  }
}
