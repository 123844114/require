/**
 * 淘宝案例
 */
define(function(){
    var data=null,
        listDom=null,
        toolSpans=null,
        sale=null
    return function(options){
        data=options.data
        listDom=options.listDom
        toolSpans=options.toolSpans
        sale=options.sale
        render()
        sale.onclick=function(e){ //销量排序
            data.sort(function(a,b){
                return a.count-b.count
            })
            render()
            // 换样式
            toolSpans.forEach(function(item){
                item.className=''
            })
            e.target.className='active'
        }
    }
    function render(){
        listDom.innerHTML =data.map(function(item){
            return `<li>
            <img src="${item.src}" alt="">
            <p class="detail"><span>￥${item.price}</span><span>${item.count}万+人付款</span></p>
            <p class="title">${item.title}</p>
            </li>`
        }).join('')
    }
    function setSpanActive(){

    }
})