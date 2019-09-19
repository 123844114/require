/**
 * 弹框模块
 */
define(['getEl'], function (getEl) {
    function Dialog(opt) { 
        this.dialog=opt.dialog
        this.okFn=opt.okFn
        this.init()
    }
    Dialog.prototype = {
        init:function(){
            this.initEvent()
        },
        show:function(){
            this.dialog.style.display='block'
        },
        hide:function(){
            this.dialog.style.display='none'
        },
        initEvent:function(){
            var _this=this
            getEl.getDom('#cancel').onclick=function(){
                _this.hide()
            }
            getEl.getDom('#ok').onclick=function(){
                _this.okFn()
                _this.hide()
            }
        }
    }
    return Dialog
})