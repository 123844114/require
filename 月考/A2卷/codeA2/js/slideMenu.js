/**
 * 下拉菜单
 * 面向过程
 * 功能：
 * 1、根据数据渲染菜单
 * 2、点谁给谁加样式
 */
define(['getEl'], function (getEl) {
    var data = [], menuUL = null, rightObj = {}, rightMenu = null
    return function (options) {
        data = options.data
        console.log(data)
        menuUL = options.menuUL
        rightMenu = options.rightMenu
        changeBtn=options.changeBtn
        dialog=options.dialog   //弹框对象
        console.log(dialog)
        dialog.okFn=function(){   //拿着rightObj,渲染给#top
            renderRightMenu(getEl.getDom('#top'))
        }
        renderMenu()
        clickEvent()
        clickChildren()
        deleteRightMenu()
        editFn()

    }

    //1、根据数据渲染菜单
    function renderMenu() {
        var str = ``
        data.forEach(function (item) {
            var str1 = ``
            item.children.forEach(function (item) {
                str1 += `<li id=${item.id}>${item.deptname}<span>√</span></li>`
            })
            str += `<li id=${item.id}>
            <p>${item.deptname}</p>
            <ul class="children">
               ${str1}
            </ul>
        </li>`
        })
        menuUL.innerHTML = str
    }
    //2、点谁给谁加样式
    function clickEvent() {//给一级菜单添加点击事件
        getEl.getDoms('#menu>li').forEach(function (item) {
            item.onclick = function (e) {
                //省略兼容
                if (e.target.tagName == 'P') {
                    var children = e.target.nextElementSibling
                    //先把所有的二级菜单隐藏
                    if (children.style.display === 'block') {
                        children.style.display = 'none'
                    } else {
                        children.style.display = 'block'
                    }
                }
            }
        })
    }
    //3、给二级菜单绑定事件
    function clickChildren() {//给二级菜单绑定点击事件
        getEl.getDoms('.children>li').forEach(function (item) {
            item.onclick = function () {
                // 1、显示√
                item.children[0].style.display='inline-block'
                // 2、生成右侧数据rightObj
                rightObj[item.id]=item.innerText.replace('√','')
                console.log(rightObj)

                renderRightMenu(rightMenu)

            }
        })
    }
    // 4、渲染右侧菜单
    function renderRightMenu(dom){
        var str=``
        for(var key in rightObj){
        str+= `<li id=${key}>${rightObj[key]}<span>&times;</span></li>`
        }
        dom.innerHTML=str
    }
    // 5、右侧绑定删除事件---委托
    function deleteRightMenu(){
        rightMenu.addEventListener('click',function(e){
            //此处省略兼容性
            var target=e.target
           if(target.tagName==='SPAN'){
            // rightMenu.removeChild(target.parentNode)
            var id=target.parentNode.id
           delete rightObj[id]
           renderRightMenu(rightMenu)
           }
        })
        getEl.getDom('#top').addEventListener('click',function(e){
            //此处省略兼容性
            var target=e.target
           if(target.tagName==='SPAN'){
            // rightMenu.removeChild(target.parentNode)
            var id=target.parentNode.id
           delete rightObj[id]
           renderRightMenu(getEl.getDom('#top'))
           }
        })
    }
    // 6、给修改按钮绑定点击事件
    function editFn(){
        changeBtn.onclick=function(){
            console.log(rightObj)
            renderRightMenu(rightMenu)
            dialog.show()
           
        }
    }
    
})