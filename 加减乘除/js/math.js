define( function() {
    'use strict';
    var add=function(a,b){
        return a+b
    }
    var reduce=function(a,b){
        return a-b
    }
    var multi=function(a,b){
        return a*b
    }
    var divison=function(a,b){
        return a/b
    }
    return {add:add,reduce:reduce,multi:multi,divison:divison}
});