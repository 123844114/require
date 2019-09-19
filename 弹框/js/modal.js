/**
 * 模态框
 */
define(['getEl'],function(getEl){
    function Modal(options){
        this.isShow=options.isShow||false
        this.onOK = options.ok||function(){}
        this.onCancel=options.cancel||function(){}
        this.currentDom=null //当前生成的modal框
        this.init()
    }
    Modal.prototype.init=function(){
        this.mount()
        this.addEvents()
        this.isShow?this.show():this.hide()
    }
    //1、确定按钮
    Modal.prototype.onOK=function(){}
    // 2、取消按钮
    Modal.prototype.onCancel=function(){
        document.body.removeChild(this.currentDom)
    }
    // 3、点x按钮
    // 4、生成model
    Modal.prototype.createDom=function(){
        var div= document.createElement('div')
        div.className='modal'
        div.innerHTML=`<div class="body">
                <div class="title">提示框 <span class="close">&times;</span></div>
                <div class="content">确定要删除吗？</div>
                <div class="footer">
                    <span class="btn cancel">取消</span>
                    <span class='btn ok'>确定</span>
                </div>
            </div>`
        this.currentDom=div
    }
    // 5、绑定事件 给 确定和取消绑定事件
    Modal.prototype.addEvents=function(){
        var _this=this
        getEl.getDom('.ok').onclick=function(){
            _this.onOK()
        }
        getEl.getDom('.cancel').onclick=function(){
            _this.hide()
            _this.onCancel()
        }
        getEl.getDom('.close').onclick=function(){
            _this.destroy()
        }
    }
    // 6、show
    Modal.prototype.show=function(){
        this.currentDom.style.display='block'
    }
    // 7、hide
    Modal.prototype.hide=function(){
        this.currentDom.style.display='none'
    }
    // 8、销毁
    Modal.prototype.destroy=function(){
        console.log(this)
        document.body.removeChild(this.currentDom)
        Modal.isMount=false
    }
    // 9、挂载节点
    Modal.prototype.mount=function(){
        // debugger
        if(Modal.isMount){
            return
        }else{
            this.createDom()
            document.body.appendChild(this.currentDom)
            Modal.isMount=this
        } 
    }
    // 10、重新打开
    Modal.prototype.repeatShow=function(){
        this.currentDom.style.display='block'
        
    }
    function createModal(options){
        // debugger
        if(Modal.isMount){
            return Modal.isMount.repeatShow()
        }else{
            new Modal(options)
        }
    }
    return createModal
})