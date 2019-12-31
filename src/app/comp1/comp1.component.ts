import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() show = new EventEmitter();

  call() {
    this.show.emit(this.employees);
    console.log(this.employees);
  }

  employees = [
    {
      "name": 'Venu',
      "id": 19419,
      "city": 'Sattenapalli'
    },
    {
      "name": 'Akram',
      "id": 19389,
      "city": 'Hyderabad'
    },
    {
      "name": 'Sai',
      "id": 19306,
      "city": 'Khammam'
    },
    {
      "name": 'Mahesh',
      "id": 19394,
      "city": 'Nalgonda'
    },
    {
      "name": 'Naveen',
      "id": 19413,
      "city": 'Vijayawada'
    }
  ];
}
