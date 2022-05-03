const mapArrToStrings = (arr) => {
    return arr
        .filter(item => Number.isInteger(item))
        .map((item) => Math.pow(item, 2));
}

module.exports = mapArrToStrings;
