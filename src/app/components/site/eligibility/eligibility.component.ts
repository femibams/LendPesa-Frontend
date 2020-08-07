import { Component, OnInit } from '@angular/core';
import { NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {
  active = 1
  model: NgbDateStruct;
  
  constructor() { }

  ngOnInit(): void {
  }

}
