function even(numbersArray) {
    var evenNum = [];
    for (var i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            evenNum.push(numbersArray[i]);
        }
    }
    return evenNum;
}

function printResults() {
    var originalArray = [2, 7, 4];
    var editedArray = even(originalArray);

    console.log("The original array is:", originalArray);
    console.log("The even numbers array is:", editedArray);
}

window.onload = printResults;