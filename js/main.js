console.group("---------- 1 ----------");

function typesOfArray(arr) {
    var str = 0;
    var obj = 0;
    var num = 0;
    var bol = 0;
    var nul = 0;
    var und = 0;

    for(var i = 0; i < arr.length; i++) {

        if(arr[i] !== null) {
            switch(typeof(arr[i])) {
                case 'string': str++; break;
                case 'number': num++; break;
                case 'object': obj++; break;
                case 'boolean': bol++; break;
                case 'undefined': und++; break;
            }
        }
        else {
          nul++;  
        } 
    }
        console.log(
            'Array types stat: ',
            '\nstring: ' + str, 
            '\nnumber: ' + num, 
            '\nobject: ' + obj, 
            '\nboolean: ' + bol, 
            '\nnull: ' + nul, 
            '\nundefined: ' + und
        );

}
console.log("typesOfArray([1, 'a', 'b', {}, {}, null, null, undefined, true, false]) => ");
typesOfArray([1, 'a', 'b', {}, {}, null, null, undefined, true, false]);

console.groupEnd("--------------------");
console.group("---------- 2 ----------");


var rangeToArray = function(rangeStart, rangeStop, rangeStep){
    var arr = []; var index = 0;

    if(rangeStop >= rangeStart){
        for(var i = rangeStart; i <= rangeStop; i = i + rangeStep){
            arr[index] = i;
            index++;
        }
    }else{
        for(var i = rangeStart; i >= rangeStop; i = i - rangeStep){
            arr[index] = i;
            index++;
        }
    }
    return arr;
};
console.log("rangeToArray(1, 3, 1) => " + rangeToArray(1, 3, 1));

var sumArray = function(arr){
    var sum = 0;
    arr.forEach(function(item){
        sum = sum + item;
    });
    return sum;
};
console.log("sumArray([10, 20, 20]) => " + sumArray([10, 20, 20]));

var multiplyArray = function(arr){
    var sum = 1;
    arr.forEach(function(item){
        sum = sum * item;
    });
    return sum;
};
console.log("multiplyArray(rangeToArray(1, 5, 1)) => " + multiplyArray(rangeToArray(1, 5, 1)));

var reverseArray = function(arr){
    return arr.reverse();
};
console.log("reverseArray([1, 2, 3]) => " + reverseArray([1, 2, 3]));

console.groupEnd("--------------------");
console.group("---------- 3 ----------");

(function(){

    var text = prompt('write text please') || "";
    var punctuations = [',','.','!','?','-',':',';'];
    var counterPunctuations = 0;

    if( text.length < 1 || text.length > 140 )  text = prompt('write text from 1 to 140 characters') || "";

    var rightText = text
    .split("")
    .filter(function(currentValue, index, array) {
       return (punctuations.indexOf(currentValue) != -1 && currentValue == array[index - 1]) ? false : true;
    })
    .map(function(currentValue) {
        (punctuations.indexOf(currentValue) != -1) ? counterPunctuations++ : false;
        return currentValue;
    })
    .join("");

    var percent = (counterPunctuations / rightText.length) * 100;  
    console.log("Hey, here's Your original message: %s \n We've found some mistakes, so corrected them for You: %s \n %f% of the text are punctuation marks!", text, rightText, percent);

})();


console.groupEnd("--------------------");
console.group("---------- 4 ----------");

function deepEqual(a, b){
    var str1 = "";
    var str2 = "";

    for ( var key in a){
        str1 += a[key] + ":" + key;
    }
    for (var key in b){
        str2 += b[key] + ":" + key;
    }
    return str1 == str2;
} 

var a = {
 name:       'John',
 lastname:   'Doe',
 age:        76
 };
 
var b = {
 name:       'John',
 lastname:   'Doe',
 age:        76,
};

console.log("deepEqual(a, b) => " + deepEqual(a, b));

console.groupEnd("--------------------");