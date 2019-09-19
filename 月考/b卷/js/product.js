define(["dom"],function(D){
    var obj = {};
    function pro(opt){
        if(opt.listC===undefined){
            // alert("渲染商品的容器必须传递");
            // return;
            throw Error("渲染商品的容器没有传递");
        }
        Object.assign(obj,opt);
        //obj.data 不对这个做任何修改 专门给默认用的  
        obj.sortData = obj.data.slice();//1、深拷贝数组JSON.parse(JSON.stringify(obj.data))2、slice

        renderList(obj.data);
        fixed();
        clickNav();
    }
    /**
     * 吸顶
     */
    function fixed(){
        var t = obj.navC.offsetTop;//距离顶部的top距离
        window.onscroll = function(){
            var st = document.documentElement.scrollTop || document.body.scrollTop;
            if(st>t){
                obj.navC.classList.add("fixed");
            }else{
                obj.navC.classList.remove("fixed");
            }
        }
    }
    /**
     * 渲染数据
     */
    function renderList(data){
        var input = D.get("input",obj.navC);
        if(input.checked){
            //仅看有货
            data=data.filter(function(item){
                return item.isHas
            })
        }
        obj.listC.innerHTML=data.map(function(item){
            return `<dl>
            <dt><img src="${item.img}" alt=""></dt>
            <dd>
                <p>￥${item.price}  <span>￥${item.cost}</span></p>
                <p>${item.title}</p>
                <p>${item.sales}</p>
                <p>${item.isHas}</p>
            </dd>
        </dl>`
        }).join("")
    }
    /**
     * 点击默认、价格、销量
     */
    function clickNav(){
        obj.navC.onclick = function(e){
            var ev = e || window.event;
            var ele = ev.target || ev.srcElement;
            if(ele.tagName==="SPAN"){
                D.get(".active",this).classList.remove("active");
                ele.classList.add("active");
                if(ele.innerHTML === "默认"){
                    renderList(obj.data);
                }else{
                    //价格或者销量
                    var attrName = ele.getAttribute("type");
                    var num = +ele.getAttribute("sort");// sort 1 升序  0  降序
                    sort(obj.sortData,attrName,num);
                    ele.setAttribute("sort",num?0:1);
                    renderList(obj.sortData);
                }
            }else if(ele.tagName==="INPUT"){
                //点击仅看有货
                renderList( D.get(".active",this).innerHTML==="默认"?obj.data:obj.sortData);
            }
        }
    }
    /**
     * 对数据进行排序
     * @param {要排序的数组} arr 
     * @param {按照什么属性进行排序} attrName 
     * @param {是否升序} flag  flag==1 升序  0  降序
     */
    function sort(arr,attrName,flag){
        arr.sort(function(a,b){
            return flag?a[attrName]-b[attrName]:b[attrName]-a[attrName];
        })
    }   
    return pro;
})