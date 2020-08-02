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
  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

}
