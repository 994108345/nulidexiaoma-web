
//后台服务基地址
export const  BizRoot = "/nulidexiaoma";
//前台项目名
export const  BaseRoot = "/app";

/**
 *后台服务地址
 * */
export class CommonServiceUrls {
    addUrl?: string; // 新增url
    editUrl?: string; // 修改url
    deleteUrl?: string; // 删除url
    queryUrl?: string; // 查询url
    detailUrl?: string; // 查看明细url
    retryUrl?: string; // 重传url
    downUrl?: string;      // 下载url
}

// 页面内路由地址管理
export class CommonRouters {
    constructor(public bizModule: string) {
        let baseUrl = "/" +BaseRoot  + "/" + bizModule;
        this.path = bizModule;
        this.rootRouter = baseUrl;
        this.addRouter = baseUrl + "/add";
        this.editRouter = baseUrl + "/edit";
        this.detailRouter = baseUrl + "/detail";
    }

    path:string;
    rootRouter: string; // 主页面
    addRouter?: string; // 新增页面
    editRouter?: string; // 修改页面
    detailRouter?: string; // 明细页面
}
