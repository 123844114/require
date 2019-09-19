/**
 * 弹窗
 */
define(function(){
    function Modal(options){
        options = options || {};
        this.isShow = options.isShow || false; //是否展示
        this.title = options.title || '请输入标题'; // 提示标题
        this.content = options.content || '请输入提示内容'; // 提示内容
        this.btnOkText = options.btnOkText || '确定'; // 按钮的文字提示
        this.btnCancelText = options.btnCancelText || '取消'; // 按钮的文字提示
        this.isMounted = false; // 该节点是否已被挂载
        this.onOk = options.onOk || function(){} // 监听确定按钮被点击
        this.onCancel = options.onCancel || function(){} // 监听取消按钮被点击
        this.init(); // 初始化
    }
    Modal.prototype.init = function(){ //弹窗初始化
        this.createDom(); // 生成dom结构和必要的样式
        this.events(); // 添加必要的事件
        this.mount(); // 挂载dom节点
        this.isShow ? this.show() : this.hide(); // 初始状态下是显示还是隐藏
        Modal.modal = this; // 记录当前生成的实例
    }
    Modal.prototype.updateProperty = function(options){ // 更新内部属性，是数据和属性保持一致
        Object.assign(this,options);
        var h3 = this._rootDom.getElementsByTagName('h3')[0];
        var p = this._rootDom.getElementsByTagName('p')[0];
        var btn = this._rootDom.getElementsByTagName('button');
        h3.innerHTML = this.title;
        p.innerHTML = this.content;
        btn[0].innerHTML = this.btnOkText;
        btn[1].innerHTML = this.btnCancelText;
        this.isShow ? this.show() : this.hide();
        return this;
    }
    Modal.prototype.createDom = function(){ // 创建dom结构和必要的样式
        this._rootDom = document.createElement('div');
        this._rootDom.style.cssText = `position:absolute;left:0;right:0;bottom:0;top:0;background:rgba(0,0,0,0.5);cursor:pointer;`;
        var wrapperCssText = `min-width:300px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background-color:#fff;padding:20px;border-radius:5px;`;
        var h3CssText = `margin:10px 0;`;
        var pCssText = ``;
        var divCssText = `text-align:right`;
        var btnOkCssText = `cursor:pointer;background:#1890ff;border:0;line-height:30px;padding:0 15px;color:#fff;border-radius:5px;outline:none;`;
        var btnCancelCssText = btnOkCssText + `background-color:#f5222d;`;
        this._rootDom.innerHTML = `
        <div style="${wrapperCssText}">
            <h3 style="${h3CssText}">${this.title}</h3>
            <p style="${pCssText}">${this.content}</p>
            <div style="${divCssText}">
                <button style="${btnOkCssText}">${this.btnOkText}</button>
                <button style="${btnCancelCssText}">${this.btnCancelText}</button>
            </div>
        </div>
        `
    }
    Modal.prototype.events = function(){// 添加必要的事件
        var that = this;
        var btns = this._rootDom.getElementsByTagName('button');
        btns[0].addEventListener('click',function(ev){
            ev.stopPropagation();
            that.hide();
            that.onOk();
        },false);
        btns[1].addEventListener('click',function(ev){
            ev.stopPropagation();
            that.hide();
            that.onCancel();
        },false);
        this._rootDom.addEventListener('click',function(){
            that.hide();
        },false);
    }
    Modal.prototype.mount = function(){// 挂载dom节点
        if(this.isMounted){
            throw new Error('该节点不可以重复挂载');
        }
        document.body.appendChild(this._rootDom);
        this.isMounted = true;
    }
    Modal.prototype.show = function(){ //显示弹窗
        this._rootDom.style.display = 'block';
        this.isShow = true;
        return this;
    }
    Modal.prototype.hide = function(){ // 隐藏弹窗
        this._rootDom.style.display = 'none';
        this.isShow = false;
    }
    Modal.prototype.destroy = function(){ // 销毁实例
        document.body.removeChild(this._rootDom);
        this.isMounted = false;
    }
    function createModal (options){ // 创建弹窗实例
        if(Modal.modal){
            return Modal.modal.updateProperty(options);
        }else{
            return new Modal(options);
        }
    }
    return createModal;
})