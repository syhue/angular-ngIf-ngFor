import { Component, OnInit } from '@angular/core';

enum userStatus{
  inactive = 0,
  active = 1,
  
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  people: object[];
  color : string;

  constructor() { 


    this.people = [
      {
        name: "Calvin Rittmeyer",
        email: "crittmeyer0@zimbio.com",
        status: userStatus[1],
      },

      {
        name: "Madelene Pellew",
        email: "mpellew1@gmail.my",
        status: userStatus[0],
      },

      {
        name: "Heinrick Wedgwood",
        email: "hwedgwood9@discovery.com",
        status: userStatus[1],
      },

      {
        name: "Alfy Valder",
        email: "avalder8@typepad.com",
        status: userStatus[1],
      },

      {
        name: "Theodore Cawthery",
        email: "tcawthery2@cornell.edu",
        status: userStatus[1],
      }
    ];
  };

  ngOnInit(): void {
  };

  // getColor() {
    

  //   if (this.people.status === userStatus[0]) {
  //     this.color = "red";
  //   } else {
  //     this.color = "green";
  //   }


  //   return this.color;
  // };



}

