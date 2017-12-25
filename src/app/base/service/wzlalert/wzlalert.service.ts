

import {Injectable} from "@angular/core";
import {MessageService} from "primeng/components/common/messageservice";
import {Message} from "primeng/primeng";
import {MessageInfo} from "./wzlalert.config";
@Injectable()
export class WzlAlertService{
  constructor(private messageService:MessageService ){
  }
  msgs: Message[] = [];//错误信息提示框

  /*显示成功信息*/
  success(messageInfo:string,typeMessage?:string) {
    if(!typeMessage){
      typeMessage = "Success";
    }
    this.msgs = [];
    this.msgs.push({severity:'success', summary:typeMessage, detail:messageInfo});
    return this.msgs;
  }

  /*显示提示信息*/
  info(messageInfo:string,typeMessage?:string) {
    if(!typeMessage){
      typeMessage = "Info";
    }
    this.msgs = [];
    this.msgs.push({severity:'info', summary:typeMessage, detail:messageInfo});
    return this.msgs;
  }

  /*显示警告信息*/
  warn(messageInfo:string,typeMessage?:string) {
    if(!typeMessage){
      typeMessage = "Warn";
    }
    this.msgs = [];
    this.msgs.push({severity:'warn', summary:typeMessage, detail:messageInfo});
    return this.msgs;
  }

  /*显示错误信息*/
  error(messageInfo:string,typeMessage?:string) {
    if(!typeMessage){
      typeMessage = "Error";
    }
    this.msgs = [];
    this.msgs.push({severity:'error', summary:typeMessage, detail:messageInfo});
    return this.msgs;
  }

  /*显示多条信息*/
  multiple(message:MessageInfo[]) {
    this.msgs = [];
    for(let i = 0; i<message.length; i++){
      let messagesInfo:MessageInfo = message[i];
      this.msgs.push(messagesInfo);
    }
    return this.msgs;
  }

  /*会往上次提示的信息里继续添加加信息*/
  showViaService() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }
/*清空提示信息*/
  clear() {
    this.msgs = [];
  }
}

