function cs142MakeMultiFilter(originalArray) {

    let currentArray = originalArray.slice(); 

    return function arrayFilterer(filter, call) {

        if (!isDefinedFunction(filter)) {
            return currentArray;
        }

        for (let index = 0; index < currentArray.length; index++) {
            const element = currentArray[index];
            if (filter(element) === false) {
                currentArray.splice(index, 1);
            }
        }

        if (isDefinedFunction(call)) {
            const boundCallback = callback.bind(originalArray);
            boundCallback(currentArray);
        }
    }
}

// function filterCriteria(element) {}

function callback(currentArray) {
    console.log(this);
    console.log(currentArray);
}

function isDefinedFunction(func) {
    return func !== undefined || typeof (func) === 'function'
}

module.exports = cs142MakeMultiFilter;

var arrayFilterer1 = cs142MakeMultiFilter([1, 2, 3]);
arrayFilterer1(function (elem) {
    return elem !== 3; // check if element is not equal to 2
});
console.log(arrayFilterer1());
// arrayFilterer1(function (elem) {
//     return elem !== 3; // check if element is not equal to 2
// }, function (currentArray) {
//     console.log(this); // printing 'this' within the callback function should print originalArray which is [1,2,3]
//     console.log(currentArray); // prints [1, 3]
// });
// arrayFilterer1(function (elem) {
//     return elem !== 2; // check if element is not equal to 3
// });
// var currentArray = arrayFilterer1();
// console.log('currentArray', currentArray);