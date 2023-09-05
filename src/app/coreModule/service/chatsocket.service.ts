import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { Chat } from 'src/app/featureModule/user/interface/chat';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatsocketService {

  private socket!: Socket;
  private options:SocketIoConfig = {
    url: environment.socketUrl+'',
    options: {
      path: '/chat',
      auth: {
        
      },
      transports: ['websocket']
    }
  };
  constructor() {
    
  }
  
  
  connect(q:{roomid:string},auth?:{token:string}) {   
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

  emit(eventName: string, data: string, callback?: Function) {
    this.socket.emit(eventName, data, callback);
  }}
