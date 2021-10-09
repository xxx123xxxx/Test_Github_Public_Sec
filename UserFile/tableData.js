function Modify(){
    Forguncy.modifyTablesData({
        表1:{
            addRows:[
                {
                    文本:"bbb",
                    整数:1,
                    日期:"2001/12/12",
                    时间:"12:00:00",
                    是_否:0
                },
                {
                    文本:"ccc",
                    整数:3,
                    日期:"2011/11/11",
                    时间:"16:00:00",
                    是_否:0
                }
            ],
            editRows:[
                {
                    primaryKey:{
                        ID:2
                    },
                    values:{
                        文本:"edit1",
                        整数:11,
                        日期:"2001/12/12",
                        时间:"12:00:00",
                        是_否:0
                    }
                },
                {
                    primaryKey:{
                        ID:3
                    },
                    values:{
                        文本:"edit2",
                        整数:14,
                        日期:"2001/12/12",
                        时间:"15:00:00",
                        是_否:1
                    }
                }
            ],
            deleteRows:[
                {
                    ID:4
                },
                {
                    ID :5
                }
            ]
        }
    
    }, 
    function(data)
    {
        alert("成功");
    }, 
    function(errorMessage)
    {
        alert("失败:"+errorMessage);
    });
    
    
    
}




