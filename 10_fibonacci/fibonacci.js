const fibonacci = function(x) {
    if (typeof x === "string")
        x=parseInt(x);
    if(x <= 0)
        return "OOPS"
    if(x===1 || x===2)
        return 1
    let a = 1;
    let b = 1;
    let sum;
    for(let i = 2; i < x; i++){
        sum = a+b;
        a = b;
        b = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
