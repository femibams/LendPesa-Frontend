import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  providers: [NgbRatingConfig],
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

}
