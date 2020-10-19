import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../../models/customer';
import {CustomerService} from '../../../services/customer.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  @ViewChild('form') moreDetailsForm: NgForm;
  customer: Customer;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.customer.height = this.moreDetailsForm.value.newCustomerData.height;
    this.customer.weight = this.moreDetailsForm.value.newCustomerData.weight;
    this.customerService.saveCustomer(this.customer);
  }
}
