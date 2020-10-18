import {Injectable} from '@angular/core';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: Customer;

  saveCustomer(input: Customer): void {
    this.customer = input;
  }

  getCustomer(): Customer {
    return this.customer;
  }
}
