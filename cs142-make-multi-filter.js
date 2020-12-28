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
            const boundCallback = call.bind(originalArray);
            boundCallback(currentArray);
        }
    }
}

function isDefinedFunction(func) {
    return func !== undefined || typeof (func) === 'function'
}

module.exports = cs142MakeMultiFilter;
