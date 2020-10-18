import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  gender: boolean;
  height: number;
  weight: number;
  bmiNumber: number;
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
  bmiGroup: string;

  constructor(
    private location: Location,
    private router: Router,
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.getData();
    this.getBmiGroup();
  }

  calculateBmi(): number {
    return this.bmiNumber = this.weight / this.height ** 2;
  }

  goBack(): void {
    // this.location.back();
    // fixme
    console.log('Salalalal');
  }

  goHome() {
    console.log('navigate to home');
    this.router.navigateByUrl('');
  }

  private getData() {
    this.weight = this.customerService.getCustomer().weight;
    this.height = this.customerService.getCustomer().height;
    this.gender = this.customerService.getCustomer().gender;
  }

  private getBmiGroup(): void {
    // fixme
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
    console.log(this.bmiNumber, this.bmiGroup);
  }

}
