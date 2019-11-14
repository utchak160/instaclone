import { Component, OnInit } from '@angular/core';
import {Cards} from '../Cards';

@Component({
  selector: 'app-side-body',
  templateUrl: './side-body.component.html',
  styleUrls: ['./side-body.component.css']
})
export class SideBodyComponent implements OnInit {
   Cards = Cards;
  constructor() { }

  ngOnInit() {
  }

}
