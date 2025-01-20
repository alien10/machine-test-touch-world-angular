
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = [
    {
      name: 'John Doe',
      contact: '1234567890',
      email: 'john.doe@example.com',
      address: '123 Main St',
    },
    {
      name: 'Jane Smith',
      contact: '9876543210',
      email: 'jane.smith@example.com',
      address: '456 Elm St',
    },
    {
      name: 'Alice Johnson',
      contact: '1122334455',
      email: 'alice.johnson@example.com',
      address: '789 Pine St',
    },
    {
      name: 'Bob Brown',
      contact: '6677889900',
      email: 'bob.brown@example.com',
      address: '321 Oak St',
    },
    {
      name: 'Charlie Davis',
      contact: '4455667788',
      email: 'charlie.davis@example.com',
      address: '654 Maple St',
    },
    {
      name: 'Diana Wilson',
      contact: '9988776655',
      email: 'diana.wilson@example.com',
      address: '987 Cedar St',
    },
    {
      name: 'Ethan Clark',
      contact: '5566778899',
      email: 'ethan.clark@example.com',
      address: '147 Spruce St',
    },
    {
      name: 'Fiona Harris',
      contact: '1231231234',
      email: 'fiona.harris@example.com',
      address: '258 Willow St',
    },
    {
      name: 'George Evans',
      contact: '3213214321',
      email: 'george.evans@example.com',
      address: '369 Birch St',
    },
    {
      name: 'Hannah Moore',
      contact: '7897899876',
      email: 'hannah.moore@example.com',
      address: '741 Aspen St',
    },
    {
      name: 'Ian Taylor',
      contact: '4564566543',
      email: 'ian.taylor@example.com',
      address: '852 Poplar St',
    },
    {
      name: 'Julia White',
      contact: '6546544567',
      email: 'julia.white@example.com',
      address: '963 Sycamore St',
    },
    {
      name: 'Kevin Hall',
      contact: '9879871234',
      email: 'kevin.hall@example.com',
      address: '753 Redwood St',
    },
    {
      name: 'Lily Adams',
      contact: '8768762345',
      email: 'lily.adams@example.com',
      address: '159 Chestnut St',
    },
    {
      name: 'Mike Carter',
      contact: '3453459876',
      email: 'mike.carter@example.com',
      address: '951 Walnut St',
    },
  ];
  constructor() { }

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee: any) {
    this.employees.push(employee);
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
  }
}
