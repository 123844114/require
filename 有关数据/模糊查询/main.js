require.config({
    baseUrl: './js',
    paths: {
        getEl: './getEl',
        find: './find',
        data: './data'
    }
})
require(['find', 'data', 'getEl'], function (Find, data, getEl) {
    new Find({
        data: data,
        keywordDom: getEl.getDom('#keyword'),
        listDom: getEl.getDom('#list')
    })
})