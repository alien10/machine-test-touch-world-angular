import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  employees = this.employeeService.getEmployees();
  searchTerm: any = {};
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  deleteEmployee(index: number) {
    const actualIndex = (this.currentPage - 1) * this.itemsPerPage + index;
    this.employeeService.deleteEmployee(actualIndex);
  }

  get filteredEmployees() {
    return this.employees
      .filter((employee:any) =>
        Object.keys(this.searchTerm).every(
          (key) =>
            !this.searchTerm[key] ||
            employee[key].toLowerCase().includes(this.searchTerm[key].toLowerCase())
        )
      )
      .slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      );
  }

  nextPage() {
    this.currentPage++;
  }

  prevPage() {
    this.currentPage--;
  }
  addNew(){
    this.router.navigate(['/dashboard/add-emp']);
  }
}
