const findTheOldest = function(people) {

    function calculateAge(current)
    {
        if("yearOfDeath" in current === false)
            current.yearOfDeath = 2025;

        return current.yearOfDeath - current.yearOfBirth;

    }


    return people.reduce((previous, current)=>{

        if(calculateAge(current) > calculateAge(previous))
            return current;
        return previous;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
