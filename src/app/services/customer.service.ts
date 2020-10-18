import {Injectable} from '@angular/core';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  createCustomer(customer: Customer) {
    console.log(`name: ${customer.name}`);
    console.log(`age: ${customer.age}`);
    console.log(`gender: ${customer.gender}`);
    console.log(`height: ${customer.height}`);
    console.log(`weight: ${customer.weight}`);
  }
}
