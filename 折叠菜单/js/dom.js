define(function(){
    return {
        /**
         * 查找元素
         * @param {选择器} selector 
         * @param {父容器} context 
         */
        getDom:function(selector,context){
            // if(context){
            //     return context.querySelector(selector);
            // }else{
            //     return document.querySelector(selector);
            // }
            context = context || document;
            return context.querySelector(selector);
        }
    }
})