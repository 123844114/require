define(function(){
    return{
        /**
         * 在指定元素中获取符合某种选择器的元素
         * @param {选择器} sel 
         * @param {父容器、上上级容器} parent 
         * @return 匹配的元素
         */
        getD:function(sel,parent){
            parent=parent||document;
            return parent.querySelector(sel);
        }
    }
})