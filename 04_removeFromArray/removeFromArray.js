const removeFromArray = function(arr, ...elem) {

    return arr.filter((value) => {

        return !elem.some((element) =>{

            return value === element;
        });
    });
};

// Do not edit below this line
module.exports = removeFromArray;
