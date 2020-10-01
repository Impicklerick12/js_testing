function calculateSum(inputArray) {

    let total = 0;

    for (let i = 0; i < inputArray.length; i++) {
        const element = inputArray[i];
        if (typeof(element) == "number") {
            total += element
        } else {
            throw("Should not accept string type input");
        }
    }

    return total
}

// console.log(calculateSum([1, "2"]));

module.exports = {
    calculateSum
}