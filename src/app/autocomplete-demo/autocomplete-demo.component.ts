import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-demo',
  templateUrl: './autocomplete-demo.component.html',
  styleUrls: ['./autocomplete-demo.component.scss']
})
export class AutocompleteDemoComponent implements OnInit {

  arr: string[] = ['one', 'two', 'three']

  constructor() { }

  ngOnInit() {
  }

}
