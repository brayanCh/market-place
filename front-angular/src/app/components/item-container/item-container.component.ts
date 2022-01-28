import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-item-container',
    templateUrl: './item-container.component.html',
    styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

    items = [
        {
            title: "Pineapple",
            content: "This is a generic text",
            price: 399
        },
        {
            title: "Pen",
            content: "This is a generic text",
            price: 440
        },
        {
            title: "Apple",
            content: "This is a generic text",
            price: 6100
        },
        {
            title: "ddefef",
            content: "This is a generic text",
            price: 48022
        }
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
