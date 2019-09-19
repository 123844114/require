define(['getEl'],function(getEl){
    function Tab(options){
        this.data=options.data
        this.tabContent=options.tabContent
        this.tabBar=options.tabBar
        this.init()
    }
    Tab.prototype={
        init:function(){
            this.createDom()
            this.initClick()
            this.show(0)
        },
        createDom:function(){
            var str=``
            var str1=``
            this.data.forEach(function(item,i){
                str+=`<img style='display:none' src='./images/${item}' />`
                str1+=`<div><img id=${i} src='./images/${item}' /></div>`
            })
            var smallBox=`<div class="smallBox"></div>`
            this.tabContent.innerHTML=str+smallBox
            this.tabBar.innerHTML=str1
        },
        initClick:function(){
            var _this=this
            this.tabBar.addEventListener('click',function(e){
                var e=e||window.event
                var target = e.target||e.srcElement
                if(target.tagName==='IMG'){
                    _this.show(target.id)
                }
            })
        },
        show:function(index){
            var divs=getEl.getDoms('.tab-bar>div')
            var imgs=getEl.getDoms('.tab-content>img')
            console.log(imgs[0])
            this.data.forEach(function(item,i){
                divs[i].className=''
                imgs[i].style.display='none'
            })
            divs[index].className='active'
            imgs[index].style.display='block'
        }
    }
    return Tab
})