/**
 * 面向过程
 */
define(['getEl'],function(getEl){
    function Select(options){
        var data = options.data
        var selectedData =[]
        //渲染option
        createOptions(data)
        //
        getSelectData(data,selectedData)
        //绑定点击删除事件
        deleteLi(selectedData)
        getEl.getDom('#btn').onclick=function(){
            getdata(selectedData)
        }
    }
    function createOptions(data){ //根据data生成option
        var select = getEl.getDom('#select')
        data.forEach(function(item,i){
            var option=document.createElement('option')
            option.innerHTML=item.title
            option.value=item.data
            select.appendChild(option)
        })
    }
    function getSelectData(data,selectedData){
        var select = getEl.getDom('#select')
        var options = select.options
        select.onchange=function(){
            // console.log(select.selectedIndex-1)
            var obj=data[select.selectedIndex-1]
            // 判断数组selectedData中是否已存在obj findIndex
            var index =selectedData.findIndex(function(item){
                return item.data===obj.data
            })
            if(index===-1){
                selectedData.push(obj)
                render(selectedData)
            }
            console.log(selectedData)
        }
    }
    function render (selectedData){ //根据selectedData渲染li标签
        var list = getEl.getDom('#list')
        list.innerHTML= selectedData.map(function(item,i){
            return `<li id=${i}>${item.title} <span>&times;</span></li>`
        }).join('')
    }
    function deleteLi(selectedData){ //删除li标签，先从数组selectedData中splice ， 再次render
        var list = getEl.getDom('#list')
        list.addEventListener('click',function(e){
            var e= e||window.event
            var target = e.target||e.srcElement
            
            if(target.tagName==='SPAN'){
                var index = target.parentNode.id
                selectedData.splice(index,1)
                console.log(selectedData)
                render(selectedData)
            }
        })
    }
    function getdata(selectedData){  
        // {
        //     title: '苹果',
        //     data: 'apple',
        // },
        // {
        //     title: '西瓜',
        //     data: 'watermelon'
        // } 
     var str=  selectedData.map(function(item){
            return `data=${item.data}`
        }).join('&')
        console.log(str)
    }
    return Select
})