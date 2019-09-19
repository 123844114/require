/**
 * 入口文件
 */
require.config({
    baseUrl: './js',
    paths: {
        getEl: './getEl',
        carouse: './carouse'
    }
})
require(['getEl', 'carouse'], function (getEl, Carouse) {
    new Carouse({
        time: 2000,
        imgBox: getEl.getDom('#imgBox'),
        nodeBox: getEl.getDom('#nodeBox'),
        leftBtn: getEl.getDom('#leftBtn'),
        rightBtn: getEl.getDom('#rightBtn')
    })
    console.log(getEl.getDom('#imgBox').children)
})