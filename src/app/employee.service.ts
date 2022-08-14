import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees"

  constructor(private httpClient : HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL);
  }
  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseURL, employee);
  }
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.baseURL + "/" + employee.id, employee);
  }
  deleteEmployee(id: number | undefined): Observable<any> {
    return this.httpClient.delete<any>(this.baseURL + "/" + id);
  }
  getEmployee(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.baseURL + "/" + id);
  }
}

