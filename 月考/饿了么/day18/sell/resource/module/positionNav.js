define(['each', 'velocity'], function($, Velocity) {
    var PositionNav = function(opts) {
        //参数校验
        if(!opts.nav) {
            throw Error("您需要传递有一个元素！！！");
            return;
        }
        var main = document.querySelector(opts.main);
        var section = [...main.children];
        var nav = document.querySelector(opts.nav);
        var oLi = [...nav.firstElementChild.children];
        var left = nav.offsetLeft;
        var flag = true;  //开关
        
        //定位导航
        window.onscroll = function() {
            //吸顶
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop >= 200) {
                nav.style.cssText = `position: fixed; left: ${left}px; top: 0; margin-top: 0;`;
            } else {
                nav.style.cssText = "position: static; margin-top: 20px;"
            }
            
            if(flag) {
                //console.log(parseInt(scrollTop / section[0].offsetHeight))
                //给滚动到对应的楼层添加样式
                $(section, function(item, index) {
                    //获取到每一个楼层+自身高度的一半的高度
                    var iTop = item.offsetTop + item.offsetHeight / 2;
                    if(iTop >= scrollTop) {
                        oLi.forEach(function(item) {
                            item.className = "";
                        })
                        oLi[index].className = "active";
                        return false;
                    }
                })
            }
        }

        //点击添加样式
        oLi.forEach(function(item, index) {
            item.onclick = function() {
                flag = false;  //点击以后立马把flag变为false
                oLi.forEach(function(item) {
                    item.className = "";
                })
                item.className = "active";
                //判断是否是第一次点击：如果是第一次点击让top=-320;否则让top=-160
                var top = nav.offsetTop !== 0 ?  -320 :  -160;
                //调用Velocity的滚动方法
                Velocity(section[index], 'scroll', {
                    offset: top,
                    complete: function() {
                        flag = true;
                    }
                });
            }
        })
    }

    return PositionNav;
});