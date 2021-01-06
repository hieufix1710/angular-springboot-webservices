import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/Employee';
import {EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(
      (employees) =>{
        this.employees = employees;
      }
    )
  }

}
