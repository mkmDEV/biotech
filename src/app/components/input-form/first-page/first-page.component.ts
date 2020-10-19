import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CustomerService} from '../../../services/customer.service';
import {faMars, faVenus} from '@fortawesome/free-solid-svg-icons';
import {Options} from 'ng5-slider';
import {Customer} from '../../../models/customer';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  @ViewChild('form', {static: false}) newCustomerForm: NgForm;
  @Output() readyForNextPage = new EventEmitter<void>();

  faMars = faMars;
  faVenus = faVenus;
  customer: Customer;
  options: Options = {
    floor: 0,
    ceil: 99,
  };

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(
      (customer: Customer) => {
        this.customer = customer;
      }
    );
  }

  onSubmit(): void {
    this.customer.name = this.newCustomerForm.value.name;
    this.customer.age = this.newCustomerForm.value.age;
    this.customer.gender = this.newCustomerForm.value.gender;
    this.customerService.saveCustomer(this.customer);
    this.readyForNextPage.emit();
  }
}
