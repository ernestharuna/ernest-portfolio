import { Component, OnInit } from '@angular/core';
import 'vanilla-tilt';
declare var VanillaTilt: { init: (arg0: any, arg1: { max: number; speed: number; glare: boolean; "max-glare": number; }) => void; };

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1
    });
  }

}
