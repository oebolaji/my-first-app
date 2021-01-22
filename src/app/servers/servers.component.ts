import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = true;
  serverCreationStatus = 'No server was created!'
  serverName ="Test Sever";
  username ="";
  buttonStatus = false;
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  pStatus:boolean = false;
  buttonClicks = [];


  constructor() { 
    setTimeout (()=> {
      this.allowNewServer = false;
    },2000)
  console.log("constructor", this.allowNewServer)

  }

  ngOnInit(): void {
    console.log("ngoninit",this.allowNewServer)//done to see the difference with ngoninit and constructor
    setTimeout (()=> {
    console.log("ngoninit delay",this.allowNewServer)//done to see the difference with ngoninit and constructor
    },3000)

  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created and Name is " + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }

  // isEmpty(){
  //   if (this.username){
  //     this.buttonStatus = false
  //   } else {
  //     this.buttonStatus = true;
  //   }
  // }

  resetUser(){
    this.username = "";
  }
  toggleButton(){
    this.pStatus = !this.pStatus;
    // this.buttonClicks.push(this.buttonClicks.length + 1);
    this.buttonClicks.push(new Date());
  }

}
