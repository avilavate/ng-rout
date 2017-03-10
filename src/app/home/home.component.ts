import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'rt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public rt:Router) { }
  goToUser() {
    this.rt.navigateByUrl("/user/fromcomponent-code");
  }
  ngOnInit() {
  }

}
