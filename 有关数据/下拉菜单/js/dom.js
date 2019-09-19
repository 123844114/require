define(function(){
    return{
        /**
         * 通过id获取元素
         * @param {*} id 
         */
        getID:function(id){
            return document.getElementById(id);
        },
        /**
         * 获取父容器里面符合选择器所有的元素
         * @param {选择器} selector 
         * @param {父容器} parent 
         */
        getSelectors:function(selector,parent){
            parent=parent||document;
            return parent.querySelectorAll(selector);
        },
        /**
         * 获取父容器里面符合选择器第一个元素
         * @param {选择器} selector 
         * @param {父容器} parent 
         */
        getSelector:function(selector,parent){
            parent=parent||document;
            return parent.querySelector(selector);
        },
        show:function(ele){
            ele.style.display = "block";
        },
        hide:function(ele){
            ele.style.display = "none";
        },
    }
})
