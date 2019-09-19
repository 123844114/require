/**
 * 表单模块
 */
define(function () {
    function Form(options) {
        this.name = options.name
        this.price = options.price
        this.specs = options.specs
        this.stock = options.stock
        this.ok = options.ok
        this.add=options.add
        this.obj = {} //定义个空对象
        this.init()
    }
    Form.prototype = {
        init: function () {
            this.okClickEvent()
            this.blurEvent()
            this.addEvent()
        },
        okClickEvent: function () { //给ok按钮绑定事件
            // 先校验name
            var _this = this
            this.ok.onclick = function () {
               var arr= _this.checkAllInput()
               console.log(arr)
                // 首先要判断全部input有值，才可以拼obj
               if(arr.every(function(item){ return item})) {
                   _this.obj={
                       name:_this.name.value,
                       price:_this.price.value,
                       stock:_this.stock.value
                   }
                   console.log(_this.obj)
               }
                
            }
        },
        blurEvent: function () {//给所有input框加blur事件
            var _this = this
            this.inputs = document.querySelectorAll(".wrap input");
            this.inputs.forEach(function(item){
                item.onblur=function(){
                    if(this.value){
                        this.parentNode.parentNode.className=''
                    }else{
                        this.parentNode.parentNode.className='error'
                    }
                }
            })
        },
        checkAllInput:function(){
            this.inputs = document.querySelectorAll(".wrap input");
            console.log(this.inputs)
            return [...this.inputs].map(function(item){
                //判断每一个input框是否有值
                // 如果有 返回true
                if(item.value){
                    return true
                }else{
                // 如果空，返回false，爆红
                item.parentNode.parentNode.className='error'
                return false
            }
            })
        },
        addEvent:function(){
            this.add.onclick=function(){
                var p =document.createElement('p')
                p.innerHTML=`<input type="text" name='key'>-<input type="text" name='value'> <button>——</button>`
                // specs.appendChild(p)
                specs.insertBefore(p,add)
            }
        }
    }
    return Form
})