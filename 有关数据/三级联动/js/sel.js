define(function(){
    var obj = {};

    function sel(opt){
        if(!opt.provinceC){
            alert("请传递省份的容器");
            return;
        }
        //默认值
        var defaultV={
            data:[]
        }
        Object.assign(obj,defaultV,opt);

        //console.log(obj.data);
        render(obj.provinceC,obj.data);//渲染省份
        bindEvent();
    }
    /**
     * 渲染数据
     */
    function render(container,data){
        // obj.provinceC.innerHTML = `<option>--请选择--</option>`+obj.data.map(function(item){
        //     return `<option>${item.name}</option>`;
        // }).join("");
       container.innerHTML = `<option>--请选择--</option>`+data.map(function(item){
            return `<option>${typeof item==="object"?item.name:item}</option>`;
        }).join("");
    }
    /**
     * 绑定事件
     */
    function bindEvent(){
        //给省份绑定事件
        obj.provinceC.onchange = function(){
            var index = this.selectedIndex-1;//因为有请选择 所以减1
            var cities = index<0?[]:obj.data[index].cityList;
            // obj.cityC.innerHTML = `<option>--请选择--</option>`+cities.map(function(item){
            //     return `<option>${item.name}</option>`;
            // }).join("");
            render(obj.cityC,cities);
        }
        //
        obj.cityC.onchange = function(){
            var pIndex = obj.provinceC.selectedIndex-1;//对应省份的下标
            var cIndex = this.selectedIndex-1;//对应城市的下标
            var areas=cIndex<0?[]:obj.data[pIndex].cityList[cIndex].areaList;
            render(obj.areaC,areas);
        }
    }
    return sel;
})