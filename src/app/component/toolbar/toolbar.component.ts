import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']


})
export class ToolbarComponent implements OnInit {

  constructor() { }
 // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  //fillerContent = Array.from({length: 50}, () =>
   // `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
     //  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       //laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       //voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       //cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  ngOnInit(): void {
  }

}

