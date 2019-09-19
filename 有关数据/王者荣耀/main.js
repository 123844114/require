require.config({
    baseUrl:"js"
})
require(["data","game","dom"],function(data,Game,D){
    console.log(data);
    Game({
        data:data,
        rolesC:D.getSelector(".roles"),//战场职责的容器
        rightC:D.getSelector(".right"),
        searchBtn:D.getID("search")
    })
})