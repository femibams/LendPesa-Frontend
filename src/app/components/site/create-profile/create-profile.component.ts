import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  userType = "individual"
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .pipe(
        filter(params => params.userType)
      )
      .subscribe(params => {
        console.log(params);

        this.userType = params.userType;
      }
    );
  }


  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);
   
  }
}
