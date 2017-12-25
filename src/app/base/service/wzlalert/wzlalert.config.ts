/*信息提示框*/
export class MessageInfo {
  severity:string = 'success';//信息提示框类别，包括：success、info、error、warn
  summary:string = 'Service Message';//提示信息标题
  detail:string = 'MessageService';//具体提示信息
}
