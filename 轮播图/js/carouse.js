/**
 * 轮播图
 */
define(['./lib/velocity.min.js'],function(Velocity){
    function Carouse(options){
        this.time = options.time //自动轮播时间
        this.imgBox = options.imgBox// li标签数组9
        this.nodeBox = options.nodeBox//小圆点
        this.leftBtn = options.leftBtn
        this.rightBtn = options.rightBtn
        this.containerWidth = parseInt(this.imgBox.parentNode.offsetWidth)
        this.index=0//当前显示的li下标
        this.init()
    }
    Carouse.prototype={
        init:function(){
            this.initEvent()
            this.activeNode()
            this.autoPlay()
        },
        autoPlay:function(){//自动轮播
            // 1、图片自动
            var lis=this.imgBox.children
            var _this=this
            setInterval(function(){
                Velocity(_this.imgBox,{marginLeft:-_this.containerWidth},{
                    complete:function(){
                        _this.imgBox.appendChild(lis[0])
                        _this.imgBox.style.marginLeft=0
                    }
                })
            },this.time)
            // 2、圆点自动
        },
        scrollLeft:function(){
            var _this=this
            this.index++
            
            var lis=this.imgBox.children
            if(this.index>=lis.length){
                this.index=0
            }
            Velocity(this.imgBox,{marginLeft:-this.containerWidth},{
                complete:function(){
                    _this.imgBox.appendChild(lis[0])
                    _this.imgBox.style.marginLeft=0
                }
            })
                // this.imgBox.style.marginLeft=(-this.containerWidth)+'px'
               
                 
                this.activeNode()//小圆点跟着动

        },
        initEvent(){
            var _this=this
            this.leftBtn.onclick=function(){
                if(parseInt(_this.imgBox.style.marginLeft)===0){
                    _this.scrollLeft()
                }
            }
        },
        activeNode:function(){
            var nodes = this.nodeBox.children
            for(var i=0;i<nodes.length;i++){
                nodes[i].className=''
            }
            nodes[this.index].className='active'
        }

    }
    return Carouse
})
