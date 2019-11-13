import { Component, OnInit } from '@angular/core';
import { Cards } from '../Cards';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Cards = Cards;
  constructor() { }

  ngOnInit() {
  }

}
