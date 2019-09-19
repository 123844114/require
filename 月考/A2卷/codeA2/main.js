require.config({
    baseUrl:'./js',
    paths:{
        getEl:'./getEl',
        data:'./data',
        velocity:'../lib/velocity.min',
        slideMenu:'./slideMenu',
        dialog:'./dialog',
        list:'./list',
    }
})
require(['getEl','data','slideMenu','list','dialog'],function(getEl,data,slideMenu,List,Dialog){
    var dialog =new Dialog({
        dialog:getEl.getDom('.dialog'),
    })
    slideMenu({
        dialog:dialog,
        data:data.data,
        menuUL:getEl.getDom('#menu'),
        rightMenu:getEl.getDom('#rightMenu'),
        changeBtn: getEl.getDom('#changeBtn')
    })
    
    // new List({
    //     dialog:dialog,
    //     changeBtn:getEl.getDom('#changeBtn')
    // })
   
})