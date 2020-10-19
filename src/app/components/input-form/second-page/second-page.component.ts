import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
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
  @Output() finished = new EventEmitter<void>();
  customer: Customer;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(
      (customer: Customer) => {
        this.customer = customer;
      });
  }

  onSubmit(): void {
    this.customer.height = this.moreDetailsForm.value.height;
    this.customer.weight = this.moreDetailsForm.value.weight;
    this.customerService.saveCustomer(this.customer);
    this.finished.emit();
  }
}
