define(["dom"],function(D){
    var obj = {};

    function sel(opt){
        //设置必填项
        if(typeof opt.inputC === "undefined"){
            alert("请传递input标签");
            return;
        }
        if(typeof opt.listC === "undefined"){
            alert("请传递input标签");
            return;
        }
        var defaultV = {
            isMulti:true
        }
        Object.assign(obj,defaultV,opt);
        obj.arr = [];//用来存放数据

        render();
        clickInput();
        mouseout();
        clickCheck();
    }
    /**
     * 渲染列表
     */
    function render(){
        obj.listC.innerHTML = obj.data.map(function(item){
            return `<li><input type="checkbox">${item}</li>`
        }).join("");
    }
    /**
     * 点击input标签
     */
    function clickInput(){
        obj.inputC.onclick = function(){
            //obj.listC.style.display = "block";
            D.show(obj.listC);
        }
    }
    /**
     * 鼠标移开隐藏下拉菜单
     */
    function mouseout(){
        obj.boxC.onmouseout = function(e){
            //e.target 事件源  mouseout mouseover  
            //e.relatedTarget i相关的对象
            //console.log(e.relatedTarget);
            if(!this.contains(e.relatedTarget))
                D.hide(obj.listC);
        }
    }
    /**
     * 点击input
     */
    function clickCheck(){
        obj.listC.onclick = function(e){
           var ev = e || window.event;
           var ele = ev.target || ev.srcElement;
            if(ele.tagName==="INPUT"){
                var v = ele.parentNode.innerText;
                if(obj.isMulti===true){
                    //多选
                    if(ele.checked){
                        obj.arr.push(v);
                    }else{
                        var index=obj.arr.indexOf(v);
                        obj.arr.splice(index,1);
                    }
                    obj.inputC.value = obj.arr.join();
                }else{
                    //单选
                    var inputs= this.querySelectorAll("input");
                    for(var i=0;i<inputs.length;i++){
                        if(inputs[i]!==ele)
                        inputs[i].checked = false;
                    }
                    obj.inputC.value=ele.parentNode.innerText;
                }
                
            }
    }}

    return sel;
})