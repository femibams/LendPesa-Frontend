import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-business-loan-application',
  templateUrl: './business-loan-application.component.html',
  providers: [NgbRatingConfig],
  styleUrls: ['./business-loan-application.component.css']
})
export class BusinessLoanApplicationComponent implements OnInit {
  model: NgbDateStruct;
  loanResultDiv: boolean = false

  divs = [
    {
      id: 0,
      name: 'start',
      status: true
    },
    {
      id: 1,
      name: 'Business Details',
      status: false
    },
    {
      id: 2,
      name: 'result',
      status: false
    }
  ]

  loanOptionsResult = [
    {
      providerName: 'Access Bank',
      productOverview: 'Loan product for bank with some details we would like to display, talking about the loan, something like a brief description',
      rating: '2',
      matchingPercentage: 40,
      image_url: 'assets/img/photos/photo-28.jpg',
      selected: false
    },
    {
      providerName: 'UBA',
      productOverview: 'Loan product for bank with some details we would like to display, talking about the loan, something like a brief description',
      rating: '1',
      matchingPercentage: 20,
      image_url: 'assets/img/photos/photo-28.jpg',
      selected: false
    },
    {
      providerName: 'Union',
      productOverview: 'Loan product for bank with some details we would like to display, talking about the loan, something like a brief description',
      rating: '3',
      matchingPercentage: 60,
      image_url: 'assets/img/photos/photo-28.jpg',
      selected: false
    },
    {
      providerName: 'GTB',
      productOverview: 'Loan product for bank with some details we would like to display, talking about the loan, something like a brief description',
      rating: '5',
      matchingPercentage: 100,
      image_url: 'assets/img/photos/photo-28.jpg',
      selected: false
    }
  ]

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

  searchLoan() {
    this.loanResultDiv = true
  }

  selectLoanOption(id: number) {
    this.loanOptionsResult[id].selected = !this.loanOptionsResult[id].selected
    console.log('Selected status',this.loanOptionsResult[id])
  }

  prev(id: number) {
    this.divs[id].status = false
    this.divs[id-1].status = true
  }

  applyForLoan(id: number) {
    this.divs[id].status = false
    this.divs[id+1].status = true
  }

  businessDetailsSubmit(id: number) {
    this.divs[id].status = false
    this.divs[id+1].status = true
  }

}
