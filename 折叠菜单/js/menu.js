define(["velocity.min"],function(V){
    
    return {
        init:function(opt){
            //渲染数据
            opt.listC.innerHTML = opt.data.map(function(item){
                return `<li>
                <h5>${item.title}</h5>
                <ul>
                    ${
                        item.contents.map(function(ele){
                            return `<li>${ele}</li>`
                        }).join("")
                    }
                </ul>
            </li>`
            }).join("")
           //绑定事件
           opt.listC.onclick = function(e){
                var ev = e || window.event;
                var ele = ev.target || ev.srcElement;
                if(ele.tagName==="H5"){
                    var ul = ele.nextElementSibling;
                    var current = this.querySelector(".on");//判断是否有元素是展开的
                    if(current){
                        V(current,"slideUp",1000);
                        current.classList.remove("on");
                    }
                    if(ul.style.display!="block"){
                        V(ul,"slideDown",1000);
                        ul.classList.add("on");
                    }else{
                        V(ul,"slideUp",1000);
                        ul.classList.remove("on");
                    }
                }
           }
        }
    }
})

