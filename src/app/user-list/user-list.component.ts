import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  people: object[];

  constructor() { 

    this.people = [
      {
        name: "Calvin Rittmeyer",
        email: "crittmeyer0@zimbio.com",
        status: 'active'
      },

      {
        name: "Madelene Pellew",
        email: "mpellew1@gmail.my",
        status: 'inactive'
      },

      {
        name: "Heinrick Wedgwood",
        email: "hwedgwood9@discovery.com",
        status: 'active'
      },

      {
        name: "Alfy Valder",
        email: "avalder8@typepad.com",
        status: 'active'
      },

      {
        name: "Theodore Cawthery",
        email: "tcawthery2@cornell.edu",
        status: 'active'
      }
    ];


  }

  ngOnInit(): void {
  }

}
