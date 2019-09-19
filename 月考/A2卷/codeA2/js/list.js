define(['dialog','getEl'],function(Dialog,getEl){
    function List(opt){
        this.changeBtn=opt.changeBtn
        this.dialog=opt.dialog
        this.init()
    }
    List.prototype={
        init:function(){
            this.initEvent()
        },
        initEvent:function(){
            var _this=this
            this.changeBtn.onclick=function(){
                _this.dialog.show()
            }
        }
    }
    return List
})