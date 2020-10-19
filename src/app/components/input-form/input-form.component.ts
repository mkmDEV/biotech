import {Component, OnInit} from '@angular/core';
import {Customer} from '../../models/customer';
import {CustomerService} from '../../services/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  customer: Customer;
  isFirstPage = true;
  reset = false;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(
      (customer: Customer) => {
        this.customer = customer;
      });
  }

  onReadyForNextPage(): void {
    this.isFirstPage = false;
  }

  onFinished(): void {
    this.router.navigate(['/loading']);
  }

  onGetBack(): void {
    this.isFirstPage = true;
  }
}
