import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    AOS.init();
  }
}
