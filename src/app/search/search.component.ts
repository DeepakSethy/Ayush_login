import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchLocation = `New Orlean`;
  constructor() { }

  ngOnInit() {
  }

  submitSearch(event, formData) {
    console.log(event);
    console.log(formData.value);
  }

  searchQueryChange() {
    this.searchLocation = 'California';
  }

}
