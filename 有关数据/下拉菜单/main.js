require.config({
    baseUrl:"js"
})
require(["sel","dom"],function(Sel,D){
    var data = ["语文","数学","英语","体育","音乐","物理"]
    Sel({
        inputC:D.getSelector("input"),//input标签
        listC:D.getSelector(".list"),//列表标签
        data:data,
        isMulti:true,//true 表示多选  false 表示单选
        boxC:D.getSelector(".box")
    })
})  