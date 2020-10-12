import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {faMars, faVenus} from '@fortawesome/free-solid-svg-icons';
import {Customer} from '../../models/customer';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @ViewChild('f') newCustomerForm: NgForm;

  faMars = faMars;
  faVenus = faVenus;

  submitted = false;
  reset = false;

  customerData: Customer = {
    name: '',
    age: 0,
    sex: false,
    height: 0,
    weight: 0
  };

  constructor() {
  }

  ngOnInit(): void {

  }

  onSubmit(f: NgForm): void {
    this.submitted = true;
    this.customerData.name = this.newCustomerForm.value.newCustomerData.name;
    this.customerData.sex = this.newCustomerForm.value.newCustomerData.sex;
    this.customerData.age = this.newCustomerForm.value.newCustomerData.age;
    this.customerData.height = this.newCustomerForm.value.newCustomerData.height;
    this.customerData.weight = this.newCustomerForm.value.newCustomerData.weight;
    console.log(this.customerData);
  }
}
