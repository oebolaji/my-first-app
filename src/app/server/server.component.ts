import { style } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color: white;
    }   
    `]

})

export class ServerComponent {
    serverID: number = Math.floor(Math.random() * 20);
    serverStatus: string = "offline";

    constructor (){
        this.serverStatus= Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(status){
        // if (status === "offline"){
        //     return "red"
        // } else {
        //     return "green"
        // }
        // the above does the same thing but better when there are multiple conditions
        // also the below method doesn't accept a param it returns the value directly
        return this.serverStatus === "online" ? "green" : "red";

    }

}