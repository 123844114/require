define(function(){
    var obj = {};

    function game(opt){
        Object.assign(obj,opt);
        obj.selData = {};//存储选中的数据
        obj.arr = [];//为模糊搜索准备的

        renderRoles();
        clickRoles();
        search();
    }
    /**
     * 渲染职责
     */
    function renderRoles(){
        var str = ``;
        for(var k in obj.data){
            // console.log(obj.data[k].tit);
            str += `<li><input type="checkbox" value=${k}>${obj.data[k].tit}</li>`;
            console.log()
            // obj.data[k].item.forEach(function(ele){
            //     obj.arr.push(ele);
            // })
            obj.arr = obj.arr.concat(obj.data[k].item);//为模糊搜索准备的
        }
        obj.rolesC.innerHTML = str;
    }
    /**
     * 点击角色
     */
    function clickRoles(){
        obj.rolesC.onclick = function(e){
            var ev = e || window.event;
            var ele = ev.target || ev.srcElement;
            if(ele.tagName==="INPUT"){
                var k = ele.value;//属性名字
                if(ele.checked){
                    obj.selData[k] = obj.data[k].item;
                }else{
                    delete obj.selData[k];
                }
                console.log(obj.selData)
                renderImg();
            }
        }
    }
    /**
     * 渲染右侧的图片列表
     */
    function renderImg(){
        var str = "";
        for(var k in obj.selData){
            var items = obj.selData[k];//值数组
            str += items.map(function(ele){
                return `<dl>
                <dt>
                    <img src="img/${ele.url}" alt="">
                </dt>
                <dd>${ele.tit[0]}</dd>
            </dl>`
            }).join("")
        }
        obj.rightC.innerHTML = str;
    }
    /**
     * 模糊搜索
     */
    function search(){
        obj.searchBtn.oninput = function(){
            var v = this.value;
            var d=obj.arr.filter(function(item){
                // return item.tit[0].indexOf(v)!=-1||item.tit[1].indexOf(v)!=-1||item.tit[2].indexOf(v)!=-1
                //some 的返回值是boolean  有一个符合条件就返回true 所有的都不符合则返回false
                // var flag = item.tit.some(function(ele){
                //     return ele.indexOf(v)!=-1;
                // })
                // return  flag;
                return item.tit.some(function(ele){
                         return ele.indexOf(v)!=-1;
                    })
            })
            obj.rightC.innerHTML=d.map(function(item){
                return `<dl>
                <dt>
                    <img src="img/${item.url}" alt="">
                </dt>
                <dd>${item.tit[0]}</dd>
            </dl>`
            }).join("")
        }
    }
    return game;
})