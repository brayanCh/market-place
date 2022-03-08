import { Component, OnInit } from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from "@angular/animations";

@Component({
    selector: 'app-carrousel',
    templateUrl: './carrousel.component.html',
    styleUrls: ['./carrousel.component.css'],
    animations: [

    ],
})
export class CarrouselComponent implements OnInit {

    route = "../../../assets/";
    images = ["1.jpg", "2.png", "3.jpg", "4.png"];
    list= [0,1,2,3]
    index = 3;
    fade = "linear-gradient(to bottom, rgba(225,140,0,0.0), rgba(0,0,0,0.1), rgba(0,0,0,0.1), rgba(0,0,0,0.3),rgba(0,0,0,0.7)), url(";
    currentBg = this.fade + this.route + this.images[this.index] + ")"

    constructor() { }

    ngOnInit(): void {
    }

    actualizeBg(): void {
        this.currentBg = this.fade +this.route + this.images[this.index] + ")";
    }
    changeIndex(i: number)
    {
        this.index = i;
        this.actualizeBg();
    }
    
    changeDir(isLeft: boolean)
    {
        this.index += isLeft ? -1 : 1;
        if(this.index === 4) { this.index = 0} 
        else if(this.index === -1) { this.index = 3} 
        this.actualizeBg();
    }

}
