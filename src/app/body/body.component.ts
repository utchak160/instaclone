import { Component, OnInit } from '@angular/core';
import { Cards } from '../Cards';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  Cards = Cards;
  touched = false;

  constructor() { }

  ngOnInit() {
  }
  touch() {
    this.touched = true;
  }
  saved() {
    alert('Successfully added in your saved list!');
  }
}
