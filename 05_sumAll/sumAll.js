const sumAll = function(begining, end) {

    if(typeof begining !== 'number' || typeof end !== 'number')
        return "ERROR";


    if(end < begining)
    {
        let temp = begining;
        begining = end;
        end = temp;
    }

    if(begining < 0 || begining % 1 !== 0 || end % 1 !== 0)
    {
        return "ERROR";
    }

    let counter = 0;

    for(let i = begining; i <= end; i++){

        counter += i;
    }


    return counter;

};

// Do not edit below this line
module.exports = sumAll;
