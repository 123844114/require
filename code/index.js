/**
 * 入口文件
 */
require.config({
    baseUrl: './',

    paths: {
        'modal': './modal',
        'list': './list'
    }
})
require(['list'],function(oList){
    
});