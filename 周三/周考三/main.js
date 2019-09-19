require.config({
    baseUrl:'./js',
    paths:{
        getEl:'./getEl',
        formB:'./formB',

    }
})
require(['getEl','formB'],function(getEl,form){
    form({
        name:getEl.getDom('#name'),
        price:getEl.getDom('#price'),
        specs:getEl.getDom('#specs'),
        stock:getEl.getDom('#stock'),
        ok:getEl.getDom('#ok'),
        add:getEl.getDom('#add')
    })

})