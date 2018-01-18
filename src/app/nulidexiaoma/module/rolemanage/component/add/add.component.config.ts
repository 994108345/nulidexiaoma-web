/*菜单tree*/
export const files  =
  {
    "data":
      [
      {
        "data": {
          "menuName": "Documents",
          "menuId": "75kb",
        },
        "children": [
          {
            "data": {
              "menuName": "Work",
              "menuId": "55kb",
              "type": "Folder"
            },
            "children": [
              {
                "data": {
                  "menuName": "Expenses.doc",
                  "menuId": "30kb",
                },
                "children": [

                ]
              },
              {
                "data": {
                  "menuName": "Resume.doc",
                  "menuId": "25kb",
                }
              }
            ]
          },
          {
            "data": {
              "menuName": "Home",
              "menuId": "20kb",
              "type": "Folder"
            },
            "children": [
              {
                "data": {
                  "menuName": "Invoices",
                  "menuId": "20kb",
                  "type": "Text"
                }
              }
            ]
          }
        ]
  },
    {
      "data": {
        "menuName": "Pictures",
        "menuId": "150kb",
        "type": "Folder"
      },
      "children": [
        {
          "data": {
            "menuName": "barcelona.jpg",
            "menuId": "90kb",
            "type": "Picture"
          }
        },
        {
          "data": {
            "menuName": "primeui.png",
            "menuId": "30kb",
            "type": "Picture"
          }
        },
        {
          "data": {
            "menuName": "optimus.jpg",
            "menuId": "30kb",
            "type": "Picture"
          }
        }
      ]
    }
  ]
};

export const menuTreeCols_ext = [
  {field: 'menuName', header: '菜单名',width: '150px'},
  {field: 'menuId', header: '菜单ID',width: '150px'},
];

export class Data{
  menuName;
  menuId;
  type;
}
export class ArrObj{
  data;
  children;
}

export const children:ArrObj[] =[];

/*校验值空使用*/
export const menuParam={
  menuId:"菜单Id",
  menuName:"菜单名",
  linkUrl:"菜单路由",
  parentId:"父菜单编码",

}


