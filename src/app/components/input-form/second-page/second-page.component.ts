import {Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {Customer} from '../../../models/customer';
import {CustomerService} from '../../../services/customer.service';
import {NgForm} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  @ViewChild('form') moreDetailsForm: NgForm;
  @Output() finished = new EventEmitter<void>();
  @Output() getBack = new EventEmitter<void>();
  customer: Customer;
  errorMessage = 'A mező kitöltése kötelező!';

  constructor(
    private customerService: CustomerService,
    private modalService: NgbModal
  ) {
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

  openModal(content: TemplateRef<any>): void {
    this.modalService.open(content, {size: 'xl'});
  }

  onReset(): void {
    this.customerService.saveCustomer(new Customer());
    this.modalService.dismissAll('Cross click');
  }

  onClose(): void {
    this.modalService.dismissAll('Cross click');
  }

  onGoBack(): void {
    this.getBack.emit();
  }
}
