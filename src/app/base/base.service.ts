/**
 * Created by wenzailong on 2017/12/20.
 */
/*公用接口服务*/
import {Response,Http, RequestOptions, Headers,RequestOptionsArgs} from "@angular/http";
export class  BaseService{
  constructor(private http: Http) { }
//发送请求POST
  doHttpPost(url: string, param: any, options?: RequestOptionsArgs): Promise<any> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let defaultOptions = new RequestOptions({ headers: headers });
    let option = options || defaultOptions;

    return this.http.post(url, param, option)
      .toPromise()
      .then((res) => { return this.extractData(res) })
      .catch((res) => { return this.handleError(res) });
  }

  //发送请求GET
  doHttpGet(url: string, options?: RequestOptionsArgs): Promise<any> {
    options = options || {};
    return this.http.get(url, options)
      .toPromise()
      .then((res) => { return this.extractData(res) })
      .catch((res) => { return this.handleError(res) });
  }

  //成功处理
  public extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  //异常处理
  public handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
