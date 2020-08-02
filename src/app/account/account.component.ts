import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  providers: [NgbRatingConfig],
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

}
