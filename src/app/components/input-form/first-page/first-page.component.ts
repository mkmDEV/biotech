import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../../../services/customer.service';
import {faMars, faVenus} from '@fortawesome/free-solid-svg-icons';
import {Options} from 'ng5-slider';
import {Customer} from '../../../models/customer';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  @ViewChild('form', {static: false}) newCustomerForm: NgForm;
  faMars = faMars;
  faVenus = faVenus;
  customer = new Customer();
  submitted = false;
  options: Options = {
    floor: 0,
    ceil: 99,
  };

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.customer.name = this.newCustomerForm.value.name;
    this.customer.genders = this.newCustomerForm.value.gender;
    this.customer.age = this.newCustomerForm.value.age;
    this.customerService.saveCustomer(this.customer);
  }
}
