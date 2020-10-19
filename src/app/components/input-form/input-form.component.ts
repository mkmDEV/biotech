import {Component, OnInit, TemplateRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Customer} from '../../models/customer';
import {CustomerService} from '../../services/customer.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  customer = new Customer();
  savedCustomer: Customer;
  isFirstPage = true;
  submitted = false;
  reset = false;

  constructor(
    private customerService: CustomerService,
    private modalService: NgbModal
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

  onSubmit(): void {
    this.submitted = true;
  }

  openModal(content: TemplateRef<any>): void {
    this.modalService.open(content, {size: 'xl'});
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
