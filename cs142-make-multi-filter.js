function cs142MakeMultiFilter(originalArray) {

    function arrayFilterer(filterCriteria, callback) {
        const currentArray = originalArray;
        for (let index = 0; index < currentArray.length; index++) {
            const element = currentArray[index];
            if (filterCriteria(element) === false) {
                currentArray.splice(index, 1);
            }
        }
        return callback();
    }
    return arrayFilterer;
}

function filterCriteria(element) {
    return element !== 2;
}

function callback(currentArray) {
    console.log(this); 
    console.log(currentArray); 
}

var arrayFilterer1 = cs142MakeMultiFilter([1, 2, 3]);
console.log(arrayFilterer1);
