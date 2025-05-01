const reverseString = function(str) {

    let newStr = "";


    let length = str.length;


    for(let i = length - 1; i >= 0; i--)
    {

        newStr += str.at(i);
    }



    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
