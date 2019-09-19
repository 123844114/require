require.config({
    baseUrl:"js"
})
require(["dom","time","data","product"],function(D,T,data,Product){
    //倒计时
    T("2019-06-05",D.get(".time b"));
    //渲染商品
    Product({
        data:data,
        navC:D.get("nav"),//导航
        listC:D.get(".list")//列表容器
    })
})