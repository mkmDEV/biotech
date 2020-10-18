import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Customer} from '../../models/customer';
import {CustomerService} from '../../services/customer.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @ViewChild('form') newCustomerForm: NgForm;

  customer = new Customer();
  savedCustomer: Customer;
  isFirstPage = true;
  submitted = false;
  reset = false;

  constructor(
    private customerService: CustomerService,
    private modalService: NgbModal,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.submitted) {
      this.savedCustomer = this.customerService.getCustomer();
    }
  }

  togglePage(): void {
    this.isFirstPage = !this.isFirstPage;
  }

  onSubmit(form: NgForm): void {
    this.customer.name = form.value.newCustomerData.name;
    this.customer.gender = form.value.newCustomerData.gender;
    this.customer.age = form.value.newCustomerData.age;
    this.customer.height = form.value.newCustomerData.height;
    this.customer.weight = form.value.newCustomerData.weight;
    this.customerService.saveCustomer(form.value.newCustomerData);
    this.submitted = true;
  }

  openModal(content: TemplateRef<any>): void {
    this.modalService.open(content);
  }

  onReset(form: NgForm): void {
    this.reset = true;
    form.reset();
    this.modalService.dismissAll('Cross click');
  }

  onClose(): void {
    this.modalService.dismissAll('Cross click');
  }
}
