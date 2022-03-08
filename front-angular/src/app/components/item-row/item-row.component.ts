import { Component, OnInit, Input } from '@angular/core';
import Item from "../item-container/item.interface"

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent implements OnInit {

  @Input() items!: Item[];
  @Input() categoryName!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
