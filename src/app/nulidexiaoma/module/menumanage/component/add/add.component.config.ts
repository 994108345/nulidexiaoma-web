import {TreeNode} from "primeng/primeng";
/*菜单tree*/
export const files :TreeNode[] =
   [
    {
      "data": {
        "menuName": "Documents",
        "menuId": "75kb",
        "type": "Folder"
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
                "type": "Document"
              }
            },
            {
              "data": {
                "menuName": "Resume.doc",
                "menuId": "25kb",
                "type": "Resume"
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
  ];

export const menuTreeCols_ext = [
  {field: 'menuName', header: '菜单名',width: '150px'},
  {field: 'menuId', header: '菜单ID',width: '150px'},
];


