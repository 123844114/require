define(['modal'],function(createModal){
    var oList = document.getElementById('list');
    var listData = [
        {msg: '今天学习了吗？'},
        {msg: '一会儿去踢球'},
        {msg: '晚上去吃饭'}
    ]
    var liStr = '';
    for(var i = 0; i < listData.length; i++){
        liStr += `<li>${listData[i].msg}</li>`;
    }
    oList.innerHTML = liStr;
    oList.addEventListener('click',function(ev){
        createModal({
            title: '警告',
            content: '确定要删除吗？',
            isShow: true,
            onOk: function(){
                oList.removeChild(ev.target);
            }
        })
    },false);
    return oList;
});