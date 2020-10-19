import {Component, OnInit, TemplateRef} from '@angular/core';
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
  customer: Customer;
  isFirstPage = true;
  reset = false;

  constructor(
    private customerService: CustomerService,
    private modalService: NgbModal,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(
      (customer: Customer) => {
        this.customer = customer;
      });
  }

  togglePage(): void {
    this.isFirstPage = !this.isFirstPage;
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

  onReadyForNextPage(): void {
    this.isFirstPage = false;
  }

  onFinished(): void {
    this.router.navigate(['/loading']);
  }
}
