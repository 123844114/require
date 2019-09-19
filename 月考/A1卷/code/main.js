/**
 * 主入口
 */
require.config({
    baseUrl:'./js',
    paths:{
        getEl:'./getEl',
        dialog:'./dialog',
        form:'./form',
        list:'./list',
        data:'./data'
    }
})
require(['getEl','dialog','list','data','dialog'],function(getEl,dialog,List,data,Dialog){
  var dialog = new Dialog({
        dialog:getEl.getDom('#dialog'),
        close:getEl.getDom('#dialog .d-close')
    })
    new List({
        dialog:dialog,
        data:data,
        content:getEl.getDom('.content'),
        num:getEl.getDom('.num'),
        addBtn:getEl.getDom('#addBtn')
    })
    
})