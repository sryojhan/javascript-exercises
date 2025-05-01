const repeatString = function(string, count) {

    if(count < 0) return "ERROR";

    let str = "";

    for(let i = 0; i < count; i++)
        str += string;

    return str;
};

// Do not edit below this line
module.exports = repeatString;
