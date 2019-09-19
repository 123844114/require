/**
 * 主入口文件
 */
require.config({
    baseUrl:'./js',
    paths:{
        getEl:'./getEl',
        tab:'./tab',
        data:'./data',
        demo:'./demo'
    },
    shim:{}
})
require(['tab','data'],function(Tab,data){
    new Tab({
        data:data
    })
})