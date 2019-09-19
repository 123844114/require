/**
 * 放大镜效果
 * 鼠标移入
 * 鼠标移出
 * 鼠标在上移动
 */
define([],function(){
    function Zoom(options){
        this.tabContent=options.tabContent
        this.rightDom=options.rightDom
    }
    Zoom.prototype={}
    return Zoom
})