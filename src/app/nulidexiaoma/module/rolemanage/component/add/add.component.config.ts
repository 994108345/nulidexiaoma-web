
/*校验值空使用*/
export const roleParam={
  roleName:"角色名",
}

export const menuTableDemoExt=[
  {
     label:"测试",
    data: "1",
    expanded:true,
    children:[
      {
        label:"测试1",
        data: "2",
        expanded:true,
        partialSelected: true,
        draggable:true,

      },
      {
        label:"测试2",
        data: "3",
        expanded:true,
        partialSelected: false,
        selectable:true,
        droppable:true,
        draggable:false,
      }
    ]
  }
]


