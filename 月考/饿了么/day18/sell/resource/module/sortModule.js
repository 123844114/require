/*排序模块*/
define(function() {
    var SortModule = function(opts) {
        //容错
        if(!opts.priceBtn) {
            throw Error("您需要传递一个元素！！！");
            return;
        }
        var main = document.querySelector(opts.main);
        var section = [...main.children];
        var priceBtn = document.querySelector(opts.priceBtn);
        var content = document.querySelector('.content');
        var dl = [...main.querySelectorAll('dl')];
        var flag = true;

        //点击价格按钮对样式进行切换
        priceBtn.onclick = function() {
            if(this.classList.contains('bg')) {
                this.classList.remove('bg');
                section[0].firstElementChild.firstElementChild.innerText = "价格按照从低到高排序";
            } else {
                this.classList.add('bg');
                section[0].firstElementChild.firstElementChild.innerText = "价格按照从高到低排序";
            }

            //排序
            dl.sort(function(dl1, dl2) {
                //从每一个dl中找出价格
                var num1 = dl1.querySelector('span').innerText.slice(1)*1;
                var num2 = dl2.querySelector('span').innerText.slice(1)*1;
                if(flag) {
                    return num2 - num1;
                } else {
                    return num1 - num2;
                }
            });
            //将不是第一个section的模块隐藏
            section.forEach(function(item, index) {
                index !== 0 && (item.style.display = "none");
            })
            //把排好序的dl一依次放到content里面去
            dl.forEach(function(item) {
                content.appendChild(item)
            })

            flag = !flag;  //直接对flag取反
        }
    }

    return SortModule;
});