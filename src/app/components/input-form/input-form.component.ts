import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {faMars, faVenus} from '@fortawesome/free-solid-svg-icons';
import {Customer} from '../../models/customer';
import {CustomerService} from '../../services/customer.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @ViewChild('form') newCustomerForm: NgForm;

  faMars = faMars;
  faVenus = faVenus;

  customer = new Customer();
  isFirstPage = true;
  submitted = false;
  reset = false;

  constructor(
    private customerService: CustomerService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {

  }

  togglePage(): void {
    this.isFirstPage = !this.isFirstPage;
  }

  onSubmit(form: NgForm): void {
    this.submitted = true;
    this.customer.name = form.value.newCustomerData.name;
    this.customer.gender = form.value.newCustomerData.gender;
    this.customer.age = form.value.newCustomerData.age;
    this.customer.height = form.value.newCustomerData.height;
    this.customer.weight = form.value.newCustomerData.weight;
    console.log(this.customer);
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
