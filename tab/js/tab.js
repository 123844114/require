/**
 * 封装tab切换
 */
define(['getEl'],function(getEl){
    function Tab(options){
        this.data=options.data
        this.init()
    }
    Tab.prototype.init=function(){
        this.createTab()
        this.initEvents()
        this.changeTab(0)
    }
    // 1、生成tab的dom
    Tab.prototype.createTab=function(){
        // (1) 生成tab-bar
        var tabBar = getEl.getDom('.tab-bar')
       tabBar.innerHTML= this.data.map(function(item,i){
            return `<span index= ${i}>${item.tab}</span>`
        }).join('')
        // (2)生成tab-content
        var tabContent = getEl.getDom('.tab-content')
        tabContent.innerHTML= this.data.map(function(item){
            return `<div style='display:none'>${item.content}</div>`
        }).join('')
    }
    // 2、绑定事件
    Tab.prototype.initEvents=function(){
        var tabBar = getEl.getDom('.tab-bar')
        var _this=this
        tabBar.addEventListener('click',function(e){
            var e= e||window.event
            var target = e.target ||e.srcElement
            if(target.tagName==='SPAN'){
                var index =target.getAttribute('index')
                _this.changeTab(index)
            }
        })
    }
    // 3、tab切换功能
    Tab.prototype.changeTab=function(index){
        // 1操作标签样式
        var tabSpan = getEl.getDoms('.tab-bar span')
        var tabDiv = getEl.getDoms('.tab-content div')
        tabDiv.forEach(function(item,i){
            tabDiv[i].style.display='none'
            tabSpan[i].className=''
        })
        tabDiv[index].style.display='block'
        tabSpan[index].className='active'
    }
    return Tab
})