import {Injectable} from '@angular/core';
import {Customer} from '../models/customer';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerSubject = new BehaviorSubject(new Customer());
  private customerObservable = this.customerSubject.asObservable();

  saveCustomer(customer: Customer): void {
    this.customerSubject.next(customer);
  }


  getCustomer(): Observable<Customer> {
    return this.customerObservable;
  }
}
