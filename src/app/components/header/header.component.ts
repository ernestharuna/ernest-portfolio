import { Component, OnInit } from '@angular/core';
import 'vanilla-tilt';
declare var VanillaTilt: { init: (arg0: any, arg1: { max: number; speed: number; glare: boolean; "max-glare": number; }) => void; };

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  myfunc(){
    this.toggle = !this.toggle
  }
  toggle = true;

  ngOnInit(): void {
    VanillaTilt.init(document.querySelectorAll(".head"), {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 1
    });
  }

}
