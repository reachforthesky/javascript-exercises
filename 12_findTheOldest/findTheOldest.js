const findTheOldest = function(people) {
    sortedPeople = people.sort((a,b) => {
        if (!('yearOfDeath' in a)){
            a.yearOfDeath = new Date().getFullYear();
        }
        if (!('yearOfDeath' in b)){
            b.yearOfDeath = new Date().getFullYear();
        }
        aAge = a.yearOfDeath - a.yearOfBirth;
        bAge = b.yearOfDeath - b.yearOfBirth;
        return aAge > bAge ? -1 : 1;
    });
    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
