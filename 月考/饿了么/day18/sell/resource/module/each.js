define(function() {
    var each = function(obj, fn) {
        var value;
        for(var i = 0; i < obj.length; i++) {
            value = fn(obj[i], i);
            if(value === false) {
                break;
            }
        }
    }

    return each;
});