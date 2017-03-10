import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'rt-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  param: string;
  ngOnDestroy(): void {
   // this.sbc.unsubscribe();
    console.log("removed subscribtion: ");
    //this.subscription.unsubscribe();
  }
  constructor(public activatedRoute: ActivatedRoute) {
   this.activatedRoute.queryParams.subscribe((param) => {
      this.param = param['analytics'];
    });
    console.log("constructor: " + this.activatedRoute.snapshot.params);
  }
  ngOnInit() {
    console.log(this.param);
    //   console.log("ngOnInit"+this.activatedRoute.snapshot.params[0]);
  }
}
