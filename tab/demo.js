define(function () {
    var say = function (animal, words) {
        alert(animal + words)
    }
    return say
})

define(['./animal'],function(say){
    say('cat','喵喵')
})