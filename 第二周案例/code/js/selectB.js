/**
 * 面向过程
 */
define(['getEl'],function(getEl){
    return function (options){
        var data = options.data
        var selectData=[]  //保存选中项
        creatOptions(data)  
        getSelectData(data,selectData)
        delectLi(selectData)
        getEl.getDom('#btn').onclick=function(){
            getdata(selectData)
        }
    } 
    function creatOptions(data){  //生成option
        var select = getEl.getDom('#select')
        data.forEach(function(item,i){
            var option= document.createElement('option')
            option.innerHTML= item.title
            option.value=item.data
            select.appendChild(option)
        })
    }
    function getSelectData(data,selectData){//将选中项，存入selectData数组中
        var select = getEl.getDom('#select')
        select.onchange=function(){
            // console.log(select.selectedIndex-1)
            var obj=data[select.selectedIndex-1]
            //去重
            var index = selectData.findIndex(function(item){
                return item.data===obj.data
            })
            if(index==-1){ //没找到
                selectData.push(obj)
            }else{
                return
            }
            renderLi(selectData)
            console.log(selectData)
        }
    }
    function renderLi(selectData){
        var list= getEl.getDom('#list')
        list.innerHTML=  selectData.map(function(item,i){
            return `<li id=${i}>${item.title} <span>&times;</span></li>`
        }).join('')  
        // delectLi()  
    }
    function delectLi(selectData){
        var list= getEl.getDom('#list')
        list.addEventListener('click',function(e){
            if(e.target.tagName==='SPAN'){
                //删除
                var id  = e.target.parentNode.id
                //从数组里删除小标为id的元素
                selectData.splice(id,1)
                renderLi(selectData)
            }
        })
    }
    function getdata(selectData){
        // ['fields=apple','fields=watermelon','fields=banana'].join('&')
       let str = selectData.map(function(item){
            return `fields=${item.data}`
        }).join('&')
        console.log(str)
    }
})