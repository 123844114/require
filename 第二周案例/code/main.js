require.config({
    baseUrl: './js',
    paths: {
        getEl: './getEl',
        selectA: './selectA'
    }
})
require(['selectA'], function (Select) {
  Select({
        data: [
            {
                title: '苹果',
                data: 'apple',
            },
            {
                title: '西瓜',
                data: 'watermelon'
            },
            {
                title: '香蕉',
                data: 'banana'
            }
        ]
    })
})
