/**
 * 获取元素模块
 */

 define(function(){
     return {
         getDom:function(dom){
             return document.querySelector(dom)
         },
         getDoms:function(dom){
            return document.querySelectorAll(dom)
        }
     }
 })