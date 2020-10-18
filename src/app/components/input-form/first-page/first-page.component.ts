import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../services/customer.service';
import {faMars, faVenus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  faMars = faMars;
  faVenus = faVenus;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  saveName(name): void {
    this.customerService.saveCustomer(name.value);
  }

  saveAge(age): void {
    this.customerService.saveCustomer(age.value);
  }
}
