import { Component, OnInit } from '@angular/core';
import { ApiListService } from '../api-list.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-listing',
  imports: [FormsModule,CommonModule],
  templateUrl: './api-listing.component.html',
  styleUrl: './api-listing.component.css'
})
export class ApiListingComponent implements OnInit{
  data: any[] = [];
  displayedData: any[] = [];
  filteredData: any[] = []; 
  currentPage: number = 1; 
  rowsPerPage: number = 10; 
  totalPages: number = 1; 
  currentSort: { key: string; direction: string } = { key: 'id', direction: 'asc' };
  filters: { [key: string]: string } = { id: '', name: '', date: '' }; 
  isLoading: boolean = true;
  constructor(private apiService: ApiListService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.isLoading = true;
    this.apiService.fetchData().subscribe((res)=>{
      this.data = res;
      this.filteredData = res; 
      this.updatePagination();
      this.isLoading = false;
    })
  }

  applyColumnFilter(event: Event, column: string): void {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.filters[column] = value;
    this.filteredData = this.data.filter((item) =>
      Object.keys(this.filters).every((key) =>
        this.filters[key] === ''
          ? true
          : item[key].toString().toLowerCase().includes(this.filters[key])
      )
    );
    this.updatePagination();
  }

  

  sortData(key: string): void {
    if (this.currentSort.key === key) {
      this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSort = { key, direction: 'asc' };
    }

    const directionMultiplier = this.currentSort.direction === 'asc' ? 1 : -1;
    this.filteredData.sort((a, b) =>
      a[key] > b[key] ? directionMultiplier : a[key] < b[key] ? -directionMultiplier : 0
    );

    this.updatePagination();
  }
  
  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredData.length / this.rowsPerPage);
    this.currentPage = Math.min(this.currentPage, this.totalPages);
    this.updateDisplayedData();
  }

  updateDisplayedData(): void {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    this.displayedData = this.filteredData.slice(startIndex, endIndex);
  }

  changePage(newPage: number): void {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.updateDisplayedData();
    }
  }

  trackById(index: number, item: any): number {
    return item.id; 
  }
  

}
