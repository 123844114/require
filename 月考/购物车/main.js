require.config({
    baseUrl:"js"
})
require(["shopping","dom"],function(Shopping,d){
    var data = [{"name":"连衣裙",price:500},{"name":"T恤",price:200},{"name":"拖鞋",price:50},{"name":"蓝衬衫",price:100}];
    Shopping({
        data:data,
        tbody:d.get("table tbody"),
        selAllC:d.get("tfoot input"),//全选
        qtyC:d.get("tfoot .qty"),//总量
        amtC:d.get("tfoot .amt")//总金额
    })

})