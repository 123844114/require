define(['math','getEl'],function(math,getEl){
    var result=getEl('result')
    var getResult=function(){
        var num1=getEl('num1').value
        var num2=getEl('num2').value
        var operate=getEl('operate')
        switch(operate.value){
            case '0': result.innerHTML=math.add(num1*1,num2*1)
                    break
            case '1': result.innerHTML=math.reduce(num1*1,num2*1)
                    break
            case '2': result.innerHTML=math.multi(num1*1,num2*1)
                    break
            case '3': result.innerHTML=math.divison(num1*1,num2*1)
            break
        }
       }
       return getResult
})