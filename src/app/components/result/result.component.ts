import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../models/customer';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  customer: Customer;
  bmiNumber: number;
  bmiGroup: string;
  bmiGroups = [
    'súlyos soványság',
    'mérsékelt soványság',
    'enyhe soványság',
    'normális testsúly',
    'túlsúlyos',
    'I. fokú elhízás',
    'II. fokú elhízás',
    'III. fokú elhízás',
  ];

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe((customer: Customer) => {
      this.customer = customer;
    });
    this.getBmiGroup();
  }

  calculateBmi(weight: number, height: number): number {
    return this.bmiNumber = weight / (height * 0.01) ** 2;
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  goHome(): void {
    this.customerService.saveCustomer(new Customer());
    this.router.navigateByUrl('');
  }

  private getBmiGroup(): void {
    this.calculateBmi(this.customer.weight, this.customer.height);
    if (this.bmiNumber < 16) {
      this.bmiGroup = this.bmiGroups[0];
    } else if (this.bmiNumber >= 16 && this.bmiNumber <= 16.99) {
      this.bmiGroup = this.bmiGroups[1];
    } else if (this.bmiNumber >= 17 && this.bmiNumber <= 18.49) {
      this.bmiGroup = this.bmiGroups[2];
    } else if (this.bmiNumber >= 18.5 && this.bmiNumber <= 24.99) {
      this.bmiGroup = this.bmiGroups[3];
    } else if (this.bmiNumber >= 25 && this.bmiNumber <= 29.99) {
      this.bmiGroup = this.bmiGroups[4];
    } else if (this.bmiNumber >= 30 && this.bmiNumber <= 34.99) {
      this.bmiGroup = this.bmiGroups[5];
    } else if (this.bmiNumber >= 35 && this.bmiNumber <= 39.99) {
      this.bmiGroup = this.bmiGroups[6];
    } else {
      this.bmiGroup = this.bmiGroups[7];
    }
  }
}
