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
  user = 0
  businessLoanAnount = 0 
  businessTenor = 0
  personalLoanAnount = 0
  personalLoanTenor = 0
  
  constructor() { }

  ngOnInit(): void {
  }

  userType(user: number) {
    console.log('initial user', user)
    if(user !== this.user) {
      this.user = user
    }
    
  }

}
