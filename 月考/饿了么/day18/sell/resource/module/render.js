define(['data'], function(data) {
    var Render = function(opts) {
        //参数校验
        if(!opts.main) {
            throw Error("您需要传递一个元素！！！");
            return;
        }
        this.main = document.querySelector(opts.main);
        //渲染
        var html = "";
        // data.forEach(function(item) {
        //     html +=
        //     `<section>
        //         <div class="title"><h3>${ item.host }</h3></div>
        //         <div class="content">`
        //         //console.log(item.goods)
        //     item.goods.forEach(function(goods) {
        //         html += 
        //         `<dl>
        //             <dt><img src="${ goods.src }" alt=""></dt>
        //             <dd>
        //                 <p class="des">${ goods.des }</p>
        //                 <p class="volume">月售${ goods.volume }+份</p>
        //                 <div class="shopping-content">
        //                     <span>￥${ goods.price }</span>
        //                     <div class="shopping-cart">加入购物车</div>
        //                 </div>
        //             </dd>
        //         </dl>`
        //     })
        //     html += `</div></section>`;
        // })
        // this.main.innerHTML = html;




        // 渲染data
        // var str=``
        this.main.innerHTML=data.map(function(item){
            var goods=item.goods.map(function(item){
              return  `<dl>
                <dt><img src="${item.src}" alt=""></dt>
                <dd>
                    <p class="des">${item.des}</p>
                    <p class="volume">月售${item.volume}+份</p>
                    <div class="shopping-content">
                        <span>￥${item.price}</span>
                        <div class="shopping-cart">加入购物车</div>
                    </div>
                </dd>
            </dl>`
            }).join('')
            return `<section>
            <div class="title">
                <h3>${item.host}</h3>
                <span>大家喜欢吃，才叫真好吃</span>
            </div>
            <div class="content">${goods}</div>
                
        </section>`
        }).join('')
        
    }

    return Render;
});