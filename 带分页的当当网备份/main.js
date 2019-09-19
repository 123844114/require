/**
 * 入口模块
 */
require.config({
    baseUrl:'./js',
    paths:{
        data:'./data',
        getEl:'./getEl',
        render:'./render',
        page:'./page',
        shop:'./shop'
    }
})
require(['data','render','getEl','page','shop'],function(data,render,getEl,Page,Shop){
  var page=  new Page({
        data:data,
        prevDom:getEl.getDom('#prev'),
        nextDom:getEl.getDom('#next'),
        pageNumDom:getEl.getDom('#pageNum'),
        pageTotalDom:getEl.getDom('#pageTotal'),
        pageSize:8
    })
    // new Shop({
    //     zongheDom=getEl.getDom('#zonghe'),
    //     saleDom=getEl.getDom('#sale'),
    //     priceDom=getEl.getDom('#price'),
    // })
})