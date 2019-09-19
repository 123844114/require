require.config({
    baseUrl:'./js',
    paths:{
        'math':'./math',
        'getEl':'./getEl',
        'getResult':'./getResult'
    }
})

require(['getResult'],function(getResult){
   document.onclick=getResult
})