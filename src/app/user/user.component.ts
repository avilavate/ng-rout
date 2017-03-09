import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'rt-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
     console.log("ngOnDestroy: "+this.activatedRoute.snapshot.params[0]);
    }
  constructor(public activatedRoute:ActivatedRoute) {
     console.log("constructor: "+this.activatedRoute.snapshot.params);
   }
  ngOnInit() {
 //   console.log("ngOnInit"+this.activatedRoute.snapshot.params[0]);
  }
}
