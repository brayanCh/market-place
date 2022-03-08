import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    
    places = [
        ["Log in", "/login"], 
        ["Sign up", "/signup"] 
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
