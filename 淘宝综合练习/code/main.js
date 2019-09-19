require.config({
    baseUrl:'./js',
    paths:{
        getEl:'./getEl',
        shop:'./shop',
        data:'./data'

    }
})
require(['shop','data','getEl'],function(shop,data,getEl){
    shop({
        data:data,
        listDom:getEl.getDom('#list'),
        toolSpans:getEl.getDoms('#toolbar>span'),
        sale:getEl.getDom('#sale')
    })
})