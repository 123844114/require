define(['getEl'],function(getEl){
    function Select(options){
        this.data=options.data
        this.select = getEl.getDom('#select')
        this.list = getEl.getDom('#list')
        this.selectData=[] //存放选中项
        this.init()
    }
    Select.prototype={
        init:function(){
            this.createDom()
            this.initEvents()
        },
        createDom:function(){//通过数据生产options
            // var select = getEl.getDom('#select')
            this.data.forEach(function(item,i){
                var option=document.createElement('option')
                option.innerHTML=item.title
                option.value=item.data
                this.select.appendChild(option)
            })
        },
        initEvents:function(){ //初始化事件
            // 给select事件委托
            var _this=this
            var options =_this.select.options
            var index = 0
            _this.select.addEventListener('change',function(e){
                index = _this.select.selectedIndex
                if(index!==0){
                    _this.selectData.push(_this.data[index-1])
                    console.log(_this.selectData)
                    options[index].disabled=true
                    _this.render()
                }
            })
            // 给x绑定删除事件
            _this.list.addEventListener('click',function(e){
                
                if(e.target.tagName==='SPAN'){
                    //删除 从数组中删除
                    console.log(e.target.parentNode.id)
                    var id =e.target.parentNode.id
                    _this.selectData.splice(id,1)
                    // vra options =_this.select.options
                    var options =_this.select.options
                    console.log(e.target.parentNode.innerText.split(' ')[0])
                    var index =_this.findIndex(e.target.parentNode.innerText.split(' ')[0])
                    options[index].disabled=false
                    //重新渲染list
                    _this.render()
                    
                }
            })
        },
        render:function(){//根据selectData中的数据渲染span标签
            var _this = this
            this.list.innerHTML= this.selectData.map(function(item,i){
                return `<li id=${i}>${item.title} <span>&times;</span></li>`
            }).join('')
        },
        findIndex:function(title){
         return  this.data.findIndex(function(item){
                return item.title===title
            })
        }
         
    }
    return Select
})