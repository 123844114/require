/**
 * 分页模块
 */
define(['render','getEl'],function(render,getEl){
    function Page (options){
        this.data=options.data
        console.log(this.data.length)
        this.prevDom=options.prevDom
        this.nextDom=options.nextDom
        this.pageNumDom=options.pageNumDom
        this.pageTotalDom=options.pageTotalDom  //总页数dom
        this.totalNum=options.totalNum //总共几页
        this.pageSize=options.pageSize||10  //每页显示几条
        this.pageNum=options.pageNum||1 //当前页码
        this.init()
    }
    Page.prototype={
        init:function(){
            render(getEl.getDom('#list'),this.getCurrentPageData())
            this.getTotalNum()
            this.initEvent()
        },
        getTotalNum:function(){//
            this.totalNum=Math.ceil(this.data.length/this.pageSize)
            this.pageTotalDom.innerHTML=this.totalNum
        },
        initEvent:function(){//初始化事件
            // 给箭头绑定点击事件
            var _this=this
            this.prevDom.onclick=function(){}
            this.nextDom.onclick=function(){
               _this.pageNum<_this.totalNum ?_this.pageNum++:_this.pageNum=_this.totalNum
               _this.pageNumDom.innerHTML=_this.pageNum
               render(getEl.getDom('#list'),_this.getCurrentPageData())
            }
        },
        getCurrentPageData:function(){//获取当前页面要显示的数据,返回数据
            var start=(this.pageNum-1)*this.pageSize
            var end=this.pageNum*this.pageSize
          return  this.data.slice(start,end)
        }
    }
    return Page
})