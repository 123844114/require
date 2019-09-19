;(function(window) {
    var Dialog = function(opts) {
        var oDiv = document.createElement('div');
        oDiv.innerHTML = 
        `<div id="dialog" class="dialog">
            <div class="modal-dialog">
                <h3 class="modal-title">X</h3>
                <dl class="modal-content">
                    <dt><img src="${ opts.src }" alt=""></dt>
                    <dd>
                        <p class="des">钵仔米饭(一盒两碗)</p>
                        <div class="shopping-content">
                            <span>￥4</span>
                            <div class="shopping">立即购买</div>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>`;
        var dialog = oDiv.firstElementChild || oDiv.firstChild;
        document.body.appendChild(dialog);
        Velocity(dialog, 'fadeIn', 1000);
        var close = dialog.querySelector('.modal-title');
        close.onclick = function() {
            Velocity(dialog, 'fadeOut', {
                duration: 1000,
                complete: function() {
                    document.body.removeChild(this[0])
                }
            })
        }
    }

    window.Dialog = Dialog;
})(window);