import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'rt-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute) {
   }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params);
  }

}
