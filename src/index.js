
exports.min = function min(array) {
    if(array != undefined && array.length != 0) {
        return Math.min(...array);
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if(array != undefined && array.length != 0) {
        return Math.max(...array);
    } else {
        return 0;
    }
}


exports.avg = function avg (array) {
    if(array != undefined && array.length != 0) {
        return array.reduce((acc, cur) => acc + cur, 0) / array.length;
    } else {
        return 0;
    }
}



