import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
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
    private location: Location,
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

  calculateBmi(): number {
    return this.bmiNumber = this.customer.weight / this.customer.height ** 2;
  }

  goBack(): void {
    // fixme tipp: session storage-ba menteni az inputokat és onnan feltölteni?
    this.router.navigate();
  }

  goHome(): void {
    // fixme tipp: activated route paramba reseted=true-val, és az ngOninitben resetelje a formot mindegyik aloldalon
    this.router.navigateByUrl('');
  }

  private getBmiGroup(): void {
    this.calculateBmi();
    if (this.bmiNumber < 24.99) {
      if (this.bmiNumber < 18.49) {
        if (this.bmiNumber < 16.99) {
          if (this.bmiNumber < 16) {
            this.bmiGroup = this.bmiGroups[0];
          }
          this.bmiGroup = this.bmiGroups[1];
        }
        this.bmiGroup = this.bmiGroups[2];
      }
      this.bmiGroup = this.bmiGroups[3];
    } else {
      if (this.bmiNumber < 29.99) {
        if (this.bmiNumber < 34.99) {
          if (this.bmiNumber < 39.99) {
            this.bmiGroup = this.bmiGroups[7];
          }
          this.bmiGroup = this.bmiGroups[6];
        }
        this.bmiGroup = this.bmiGroups[5];
      }
    }
  }
}
