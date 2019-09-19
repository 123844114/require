define(function(){
    return {
        /**
         * 查找某个元素里面符合选择器的第一个元素
         * @param {选择器} selector 
         * @param {上级元素} context  如果没有就使用document
         */
        get:function(selector,context){
            context = context || document;
            return context.querySelector(selector);
        },
        /**
         * 查找某个元素里面符合选择器的所有的元素
         * @param {选择器} selector 
         * @param {上级容器} context 如果没有就使用document
         */
        gets:function(selector,context){
            context = context || document;
            return context.querySelectorAll(selector);
        }
    }
})