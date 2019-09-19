require.config({
    baseUrl:'./js',
    paths:{
        getEl:'./getEl',
        tab:'./tab',
        zoom:'./zoom',
        data:'./data'
    }
})
require(['getEl','tab','data'],function(getEl,Tab,data,Zoom){
    var tabContent=getEl.getDom('.tab-content')
    var tabBar=getEl.getDom('.tab-bar')
    var rightDom=getEl.getDom('.right')
    new Tab({
        data:data,
        tabContent:tabContent,
        tabBar:tabBar
    })
    new Zoom({
        tabContent:tabContent,
        rightDom:rightDom
    })
})