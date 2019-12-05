import { Component, OnInit } from '@angular/core';
import { Cards } from '../Cards';
import {ifTrue} from "codelyzer/util/function";
import {timeInterval} from "rxjs/operators";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  Cards = Cards;
  touched = false;
  clicked = false;

  constructor() { }

  ngOnInit() {
  }
  touch() {
    this.touched = true;
  }
  saved() {
    alert('Successfully added in your saved list!');
  }

  // like() {
  //   this.clicked = true;
  // }
}
