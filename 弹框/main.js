/**
 * 主入口模块
 */
require.config({
    baseUrl: './js',
    paths: {
        getEl: './getEl',
        modal: './modal'
    }
})
require(['modal'], function (createModal) {
    document.getElementById('btn').onclick = function () {
        createModal({isShow:true})
    }
})