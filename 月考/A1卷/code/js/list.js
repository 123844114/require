/**
 * 列表模块
 * 1、新增收货地址
 * 2、收货地址打叉
 * 3、数据渲染
 */
define(['getEl', 'dialog'], function (getEl, Dialog) {
    function List(options) {
        this.num = options.num
        this.data = options.data
        this.content = options.content
        this.addBtn = options.addBtn
        this.dialog = options.dialog
        this.init()
    }
    List.prototype = {
        init: function () {
            this.render()
            this.getNum()
            this.initEvent()
            this.inputEvent()
            this.alisClick()
            this.submitFn()
        },
        render: function () { //渲染列表数据
            this.content.innerHTML = this.data.map(function (item, i) {
                return `<div class="box" id=${i}>
                <h4>${item.alis} <span class="close">&times;</span></h4>
                <p>收货人：<span>${item.name}</span></p>
                <p>地址：<span>${item.address}</span></p>
                <p>手机号：<span>${item.mobile}</span></p>
                <p>邮箱：<span>${item.email}</span></p>
            </div>`
            }).join('')

        },
        initEvent: function () {//给列表的关闭按钮绑定点击事件,使用事件委派
            var _this = this
            this.content.addEventListener('click', function (e) {
                var e = e || window.event
                var target = e.target || e.srcElement
                if (target.tagName === 'SPAN') {
                    console.log(target.parentNode.parentNode.id)
                    var id = target.parentNode.parentNode.id
                    //id就对应数组中的下标，找对下标删除数据，然后再次渲染
                    _this.data.splice(id, 1)
                    _this.render()
                    // var currentBox=target.parentNode.parentNode
                    // this.removeChild(currentBox)
                    _this.getNum()
                }
            })
            this.addBtn.onclick = function () {//新增按钮，弹框
                _this.dialog.show()

            }
        },
        getNum: function () {//获取数据，即计算总box的总个数
            this.num.innerHTML = getEl.getDoms('.box').length
        },
        //给表单绑定input事件 非空校验
        inputEvent: function () {
            getEl.getDoms('input').forEach(function (item) {
                item.onblur = function () {
                    if (!this.value) { //错
                        this.parentNode.className = 'error'
                        // this.parentNode.classList.add('error')
                    } else {
                        this.parentNode.className = ''
                    }
                }
            })
        },
        //地址别名   
        alisClick: function () {
            getEl.getDoms('.btn').forEach(function (item) {
                item.onclick = function () {
                    // 1、点谁让谁变红
                    getEl.getDom('.main .active').classList.remove('active')
                    this.classList.add('active')
                    //2、文字加到input的value上
                    this.parentNode.children[1].value = this.innerHTML
                    console.log(this.parentNode.children[1])
                    this.parentNode.className = ''
                }
            })
        },
        //保存收货地址
        submitFn: function () {
            // {
            //     name:'八维1',
            //     address:'海淀八维',
            //     area:'海淀',
            //     mobile:'1234567890',
            //     email:'123@qq.com',
            //     alis:'公司'
            // }
            var _this = this
            getEl.getDom('#submit').onclick = function () {
                var arr =[...getEl.getDoms('input')].map(function(item){
                    if(!item.value){
                        item.parentNode.className = 'error'
                    }else{
                        item.parentNode.className = ''
                    }
                    return item.value?true:false
                })
                var result = arr.every(function (item) {
                    return item
                })
                if (result === true) {//才能保存数据
                    var obj = {
                        name:getEl.getDom('#name').value,
                        address:getEl.getDom('#address').value,
                        mobile:getEl.getDom('#mobile').value,
                        email:getEl.getDom('#email').value,
                        alis:getEl.getDom('#alis').value
                    }
                    
                    _this.data.unshift(obj)

                    //关闭弹出框
                    _this.dialog.hide()
                    //重新渲染列表
                    _this.render()
                    _this.getNum()
                    console.log(_this.data)
                }
            }
        }
    }
    return List
})