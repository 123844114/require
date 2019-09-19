/**
 * 弹框+按钮
 * 1、显示方法
 * 2、隐藏方法
 * 3、给保存按钮
 */
define(['getEl'],function(getEl){
    function Dialog(options){
        this.dialog=options.dialog||getEl.getDom('#dialog')
        this.close=options.close||getEl.getDom('#dialog .d-close')
        this.init()
    }
    Dialog.prototype={
        init:function(){
            this.initEvent()
        },
        show:function(){
            this.dialog.style.display='block'
        },
        hide:function(){
            this.dialog.style.display='none'
        },
        initEvent:function(){ //给dialog绑定点击事件
            var _this=this
            this.close.onclick=function(){
                _this.hide()
            }

        }
    }
    return Dialog
})