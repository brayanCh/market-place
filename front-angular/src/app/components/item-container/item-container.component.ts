import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-item-container',
    templateUrl: './item-container.component.html',
    styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {


    route = "../../../assets/previews/";

    items = [
        {
            title: "Sweater",
            content: "This is a generic text",
            src: this.route + "sweater.jpeg",
            price: 399
        },
        {
            title: "T Shirt",
            content: "This is a generic text",
            src: this.route + "t-shirt.jpg",
            price: 440
        },
        {
            title: "Gloves",
            content: "This is a generic text",
            src: this.route + "gloves.jpeg",
            price: 6100
        },
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
