import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    
    places = [["Log in", "/login"], 
        ["Sign up", "/signup"],
        ["Home", "/home"]];

    constructor() { }

    ngOnInit(): void {
    }

}
