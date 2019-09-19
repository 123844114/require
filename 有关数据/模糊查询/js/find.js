/**
 * 模糊查询
 */
define(function(){
    function Find(options){
        this.data=options.data
        this.keywordDom=options.keywordDom
        this.listDom=options.listDom
        this.init()
    }
    Find.prototype={
        init:function(){
            // this.renderList()
            this.initEvent()
        },
        render:function(data){
            this.listDom.innerHTML=data.map(function(item){
                return `<li>${item.name} <span>《${item.class}》</span></li>`
            }).join('')
        },
        initEvent:function(){
            var _this=this
            this.keywordDom.oninput=function(){
                var renderList=[]
                var keyword =this.value
               _this.data.forEach(function(item){
                //    debugger
                   if(item.name.indexOf(keyword)!==-1){
                    renderList.push(item)
                   }
               })
               _this.render(renderList)
            }
            
        }
    }
    return Find
})