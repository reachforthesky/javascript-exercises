const palindromes = function (rawString) {
    var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
    
    //remove punctuation
    var rawLetters = rawString.split("");
    var cleanLetters = rawLetters.filter((letter) => 
                        punctuation.indexOf(letter) === -1);

    var cleanString = cleanLetters.join("");

    //remove capital letters
    cleanString=cleanString.toLowerCase();
    cleanLetters=cleanString.split("")

    len = cleanLetters.length;
    //get rid of center letter if there is one
    if(len%2){
        cleanLetters.splice(Math.floor(len/2.0),1)
        len--;
    }

    //iterate over string looking for mismatches
    for(let i = 0; i < len/2; i++) {
        if(cleanLetters[i] !== cleanLetters[len-i-1])
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
