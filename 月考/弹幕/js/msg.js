define(["velocity.min","dom"],function(Ve,D){  
    var obj = {};

    function msg(opt){
        Object.assign(obj,opt);

        send();
        hover();
    }
    /**
     * 发送弹幕
     */
    function send(){
        //1、点击发送按钮
        obj.sendBtn.onclick = function(){
            var v = obj.inputC.value;//输入的内容;
            if(v.trim().length>0){
                //右侧列表
                addMsg(v);
                addToLeft(v);
                clear();
            }
        }
        //2、点击回车
        document.onkeydown = function(e){
            var ev = e || window.event;
            if(ev.keyCode===13){
                var v = obj.inputC.value;//输入的内容;
                if(v.trim().length>0){
                    //右侧列表
                    addMsg(v);
                    addToLeft(v);
                    clear();
                }
            }
        }
    }
    function clickFoot(e){
        var ev = e || window.event;
        var ele = ev.target || ev.srcElement;
        if(ele.tagName==="INPUT"){
            
        }
    }
    /**
     * 把弹幕的内容添加到左侧容器
     * @param {弹幕的值} v 
     */
    function addToLeft(v){
        var span = document.createElement("span");
        span.style.cssText = `position:absolute;left:${obj.contentsC.offsetWidth}px;
        top:${getTop()}px;color:rgb(${random(255,0)},${random(255,0)},${random(255,0)})`
        span.innerHTML = v;
        obj.contentsC.appendChild(span);
        Ve(span,{
            left:-span.offsetWidth
        },{
            complete:function(){
                obj.contentsC.removeChild(this[0]);
            },
            duration:random(5000,1000)
        })

    }
    function hover(){
        obj.contentsC.onmouseover = function(e){
            var ev = e || window.event;
            var ele = ev.target || ev.srcElement;
            if(ele.tagName === "SPAN"){
                Ve(ele,"pause");
            }
        }
        obj.contentsC.onmouseout = function(e){
            var ev = e || window.event;
            var ele = ev.target || ev.srcElement;
            if(ele.tagName === "SPAN"){
                Ve(ele,"resume");
            }
        }
        obj.contentsC.onclick = function(e){
            var ev = e || window.event;
            var ele = ev.target || ev.srcElement;
            if(ele.tagName === "SPAN"){
                if(ele.children.length>0){
                    ele.children[0].innerHTML++;
                }else{
                    var b = document.createElement("b");
                    b.style.color="red";
                    b.innerHTML = 1;
                    ele.appendChild(b);
                }
               
            }
        }
    }
    /**
     * 获取弹幕在内容区的top位置
     */
    function getTop(){
        var t = random(obj.contentsC.clientHeight,0);//整个内容区域
        var sel = D.getD("input:checked",obj.footC);
        if(sel){
            if(sel.value==="0"){
                t =  random(obj.contentsC.clientHeight/3,0);//
            }else if(sel.value==="1"){
                t =  random(obj.contentsC.clientHeight/3*2,obj.contentsC.clientHeight/3);//
            }else{
                t =  random(obj.contentsC.clientHeight,obj.contentsC.clientHeight/3*2);//
            }
        }
        return t;
    }
    /**
     * 获取min-max之间的随机整数
     * @param {最大值} max 
     * @param {最小值} min 
     */
    function random(max,min){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    /**
     * 把输入的弹幕添加到右侧列表里面
     * @param {输入的弹幕内容} v 
     */
    function addMsg(v){
        var p = document.createElement("p");
        p.innerHTML = "黄斌:"+v;
        obj.listC.appendChild(p);
    }
    /**
     * 清空上一次输入的内容
     */
    function clear(){
        obj.inputC.value = "";
    }
    return msg;
})