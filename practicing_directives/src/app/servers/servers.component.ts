import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  userName = '';
  userStatus = '';
 

  ngOnInit() {
    
  }

  constructor() {
    
  }

  onClickAddUser() {
    this.userStatus = 'User is created. User is '+this.userName;
    this.userName = '';
  }
}
