import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket!: Socket;
  private options:SocketIoConfig = {
    url: environment.socketUrl+'',
    options: {
      path: '/singlepost',
      auth: {
        
      },
      transports: ['websocket']
    }
  };
  constructor() {
    
  }
  
  connect(q:{id:string},auth?:{token:string}) {
    this.options.options = {...this.options.options, query : q,auth};
    this.socket = new Socket(this.options);
   
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  on(eventName: string, callback: Function) {
    this.socket.on(eventName, callback);
  }

  emit(eventName: string, data: unknown, callback?: Function) {

    this.socket.emit(eventName, data, callback);
  }

}
