

var IDs = {};

function GenIdFunc() {
    var start = 1000000;
    return function () {
        ++start;
        return start;
    }
};

IDs.GenId = GenIdFunc();

module.exports = IDs;