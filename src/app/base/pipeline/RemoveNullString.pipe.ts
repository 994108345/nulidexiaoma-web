/**
 * Created by wenzailong on 2017/12/20.
 */
import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name:'removeNullString'})
export class RemoveNullStringPipe implements PipeTransform{
  /*十次方计算*/
  transform(value:number,exponent:string):number{
    let exp = parseFloat(exponent);
    return Math.pow(value,isNaN(exp)? 1:exp);
  }
}
