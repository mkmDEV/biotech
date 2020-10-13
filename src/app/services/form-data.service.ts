import { Injectable } from '@angular/core';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  customerDetails: Customer;

  constructor() {
    this.customerDetails = new Customer();
  }
}
