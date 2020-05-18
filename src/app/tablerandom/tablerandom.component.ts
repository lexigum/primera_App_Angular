import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablerandom',
  templateUrl: './tablerandom.component.html',
  styleUrls: ['./tablerandom.component.css']
})
export class TablerandomComponent implements OnInit {

  constructor() { }

  arr = [];

  ngOnInit()
  {
    for(let i=1; i<= 10; i++)
    {
      this.arr.push([Math.floor(Math.random() * (20-0)+1), Math.floor(Math.random() * (20-0)+1), Math.floor(Math.random() * (20-0)+1), Math.floor(Math.random() * (20-0)+1), Math.floor(Math.random() * (20-0)+1)]);
    };
  }

  





}
