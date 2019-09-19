require.config({
    baseUrl: "./resource/module",
    paths: {
        'css': '../libs/css.min',
        "velocity": "../libs/velocity.min",
        "dialog": "../js/dialog"
    },
    shim: {
        "dialog": {
            exports: "Dialog"  //加载非AMD规范的模块的
        }
    }
});

require(['render', 'positionNav','sortModule', 'dialog', "css!../css/index.css"], function(Render, PositionNav, SortModule, Dialog) {
    Render({  //渲染
        "main": "#main"
    });
    PositionNav({  //定位导航
        nav: "nav",
        "main": "#main"
    });  
    SortModule({  //排序模块
        priceBtn: '#price',
        main: '#main',
    })
    var cartBtn = [...document.querySelectorAll('.shopping-cart')];
    cartBtn.forEach(function(item) {
        item.onclick = function() {
            var src = this.parentNode.parentNode.previousElementSibling.firstElementChild.src;
            Dialog({
                src: src
            });
        }
    })
});