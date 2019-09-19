define(function () {
    var name = null,
        price = null,
        specs = null,
        stock = null,
        ok = null,
        add = null,
        obj = {}
    return function (options) {
        name = options.name
        price = options.price
        specs = options.specs
        stock = options.stock
        ok = options.ok
        add = options.add
        okFn()
        inputEvent()
        addFn()
        removeP()
    }
    function okFn() {
        ok.onclick = function () {  //给ok绑定事件
            //    要对所有input进行校验
            //如果全部input通过校验，就可以拼obj
            var arr = checkAllInput()
            if (arr.every(function (item) { return item })) {
                var pArr = makeArr()
                obj = {
                    name: name.value,
                    price: price.value,
                    stock: stock.value,
                    specs: pArr
                }
            }
            //否则，就不拼obj
        }
    }
    function checkAllInput() {
        var allInput = document.querySelectorAll('input')
        return [...allInput].map(function (item) {
            if (item.value) {
                return true
            } else {
                item.parentNode.parentNode.className = 'error'
                return false
            }
        })

        // [true,true,true,true]
    }
    function inputEvent() {  //给全部input绑定oninput事件/onblur事件
        var allInput = document.querySelectorAll('input')
        allInput.forEach(function (item) {
            item.oninput = function () {
                if (this.value) {
                    this.parentNode.parentNode.className = ''
                } else {
                    this.parentNode.parentNode.className = 'error'
                }
            }
        })
    }
    function addFn() {//给add添加点击事件
        add.onclick = function () {
            var p = document.createElement('p')
            p.innerHTML = `<input type="text" name='key'>-<input type="text" name='value'> <button>——</button>`
            // specs.appendChild(p)
            specs.insertBefore(p, add)
        }
    }
    function makeArr() {
        //拼数组
        var ps = document.querySelectorAll('#specs>p')
        var pArr = []

        ps.forEach(function (item) {
            var pObj = {}
            pObj.key = item.children[0].value
            pObj.value = item.children[1].value
            pArr.push(pObj)
        })
        return pArr
    }
    // 点-号 删除一行,因为是动态添加的button，所以要用事件委托
    function removeP() {
        specs.addEventListener('click', function (e) {
            var e = e || window.event
            var target = e.target || e.srcElement
            if (target.tagName === 'BUTTON' && target.id !== 'add') {
                specs.removeChild(target.parentNode)
            }
        })
    }
})