define(["dom"],function(D){
    var obj = {};
    function shopping(opt){
        Object.assign(obj,opt);

        render();
        addOrMinus();
        clickAll();
        clickCK();
    }
    /**
     * 渲染商品
     */
    function render(){
        obj.tbody.innerHTML = obj.data.map(function(item){
            return ` <tr>
            <td><input type="checkbox"></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>
                <button>-</button>
                <span>0</span>
                <button>+</button>
            </td>
            <td>0</td>
        </tr>`
        }).join("");
    }
    /**
     * 加数量  减数量
     */
    function addOrMinus(){
        obj.tbody.onclick = function (e){
            var ev = e || window.event;
            var ele = ev.target || ev.srcElement;
            if(ele.tagName ==="BUTTON"){
                var span = ele.parentNode.children[1];//数量
                if(ele.innerHTML==="+"){
                    span.innerHTML++;
                }else if(ele.innerHTML==="-"){
                    span.innerHTML = span.innerHTML==="0"?0:span.innerHTML-1
                }
                var price = ele.parentNode.previousElementSibling.innerHTML;//价格
                ele.parentNode.nextElementSibling.innerHTML = price*span.innerHTML;
                sum();
            }
        }
    }
    /**
     * 全选
     */
    function clickAll(){
        obj.selAllC.onclick = function(){
            var v = this.checked;
            var cks = [...D.gets("tbody input")]//tbody里面的所有的checkbox
           cks.forEach(function(item){
                item.checked = v;
           })
           sum();
        }
    }
    /**
     * 计算总金额和总量
     */
    function sum(){
        var inputs = [...D.gets("input:checked",obj.tbody)];//所有选中的input
        var qty = 0,amt = 0;
        inputs.forEach(function(item){
            var tr = item.parentNode.parentNode;
            qty+=tr.children[3].children[1].innerHTML*1;
            amt+=tr.children[4].innerHTML*1;
        })
        obj.qtyC.innerHTML = qty;
        obj.amtC.innerHTML = amt;
    }
    /**
     * 点击tbody里面的checkbox
     */
    function clickCK(){
        var cks = [...D.gets("tbody input")]//tbody里面的所有的checkbox
        cks.forEach(function(item){
            item.onclick = function(){
                sum();
                obj.selAllC.checked = cks.every(function(ele){
                    return ele.checked;
                })
            }
        })
    }
    return shopping;
})