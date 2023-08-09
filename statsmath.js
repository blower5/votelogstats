"use strict";

//writing this myself so I can add voter infulence later olololollloll not going to do that lololl TODO: do that
function smathmean(array) {
    var result = 0;
    for (let i of array) {
        result += parseFloat(i);
    }
    return result / array.length;
}

//variance
function smathvari(array) {
    var tempmean = smathmean(array);
    var sqrdev = [];
    for (let i of array) {
        sqrdev.push((parseFloat(i) - tempmean)**2);
    }
    return smathmean(sqrdev);
}

//standard deviation population
function smathstdevp(array) {
    return Math.sqrt(smathvari(array));
}

// function smathtrunc(float, decimals) {
//     return Math.trunc(float*10**decimals)/10**decimals;
// }