import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReplaysocketService {

  private socket!: Socket;
  private options:SocketIoConfig = {
    url: environment.socketUrl+'',
    options: {
      path: '/replaycomment',
      auth: {
        
      },
      transports: ['websocket']
    }
  };
  constructor() {
    
  }
  
  connect(q:any,auth?:{token:string}) {
    this.options.options = {...this.options.options, query : q,auth};
    
    this.socket = new Socket(this.options);
    console.log('replayconnect!!');
   
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  on(eventName: string, callback: Function) {
    this.socket.on(eventName, callback);
    // this.socket.fromEvent(eventName).subscribe((message: unknown) => {callback(message)})
  }

  emit(eventName: string, data: any, callback?: Function) {
    console.log(eventName,data);
    
    // this.socket.ioSocket.io.query = {channelId}
    // this.socket.io('/my-namespace').query = { channelId };
    this.socket.emit(eventName, data, callback);
  }


}
