define(function(){
    function timeOut(str,dom){
        var d1 = new Date(str);
        var t=setInterval(function(){
            var d2 = new Date();
            var c = d1-d2;
            if(c<=0){
                clearInterval(t);
            }
            var day = parseInt(c/1000/60/60/24);//天
            var h = parseInt(c/1000/60/60%24);//小时
            var m = parseInt(c/1000/60%60);//分钟
            var s = parseInt(c/1000%60);//秒
            dom.innerHTML = day+"天"+h+"小时"+m+"分钟"+s+"秒";
        },1000);
    }
    return timeOut;
})