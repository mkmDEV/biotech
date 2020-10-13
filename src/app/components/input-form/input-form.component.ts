import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {faMars, faVenus} from '@fortawesome/free-solid-svg-icons';
import {Customer} from '../../models/customer';
import {FormDataService} from '../../services/form-data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @ViewChild('f') newCustomerForm: NgForm;

  faMars = faMars;
  faVenus = faVenus;

  customerData: Customer;
  isFirstPage = true;
  submitted = false;
  reset = false;

  constructor(
    private formDataService: FormDataService,
    private modalService: NgbModal
  ) {
    this.customerData = formDataService.customerDetails;
  }

  ngOnInit(): void {

  }

  togglePage(): void {
    this.isFirstPage = !this.isFirstPage;
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

  openModal(content: TemplateRef<any>): void {
    this.modalService.open(content);
  }

  onDelete(f: NgForm): void {
    // fixme: reset the whole form and set reset state to true + close dialog
    this.reset = true;
    f.reset();
  }
}
