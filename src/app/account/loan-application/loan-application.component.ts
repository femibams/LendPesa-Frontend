import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  providers: [NgbRatingConfig],
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {
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
      name: 'personal info',
      status: false
    },
    {
      id: 2,
      name: 'financial info',
      status: false
    },
    {
      id: 3,
      name: 'financial info II',
      status: false
    },
    {
      id: 4,
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

  piSubmit(id: number) {
    this.divs[id].status = false
    this.divs[id+1].status = true
  }

  financialInfoSubmit(id: number) {
    this.divs[id].status = false
    this.divs[id+1].status = true
  }

  financialInfo2Submit(id: number) {
    this.divs[id].status = false
    this.divs[id+1].status = true
  }

}
