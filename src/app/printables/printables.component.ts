import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printables',
  templateUrl: './printables.component.html',
  styleUrls: ['./printables.component.css']
})
export class PrintablesComponent implements OnInit {
  isSidebarOpen=true  ;

  openSidebar() {
    this.isSidebarOpen = true;
  }
  closeSidebar() {
    this.isSidebarOpen = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
