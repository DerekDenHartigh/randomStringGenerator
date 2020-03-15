"use strict";
(function () {

    let charset = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz !";
    let charsetArray = charset.split('');
    let charsetComplexity = charsetArray.length
    let target = "Hello World!";
    let targetLength = target.length;
    console.log("charsetArray: ", charsetArray, "\ncharsetComplexity: ", charsetComplexity);
    console.log("target phrase: ", target, "\nprase lenght: ", targetLength);
    let testString = "";
    let numberOfIterations = 0;

    const button = document.getElementsByClassName("generate-string-button")[0];
    const iterationCounter = document.getElementsByClassName("iteration-count")[0];

    const generateRandomIndex = () => {
        return Math.floor(Math.random() * charsetComplexity);
    }

    const generateStringRandomly = () => {
        testString = "";
        button.disabled = true;
        for (let i = 0; i < targetLength; i++) {
            let index = generateRandomIndex();
            testString += charsetArray[index];
            console.log(testString);
            if (testString[i] !== target[i]) { // early check to save calls
                numberOfIterations++;
                iterationCounter.innerHTML = numberOfIterations;
                return generateStringRandomly()
            }
            if (i === targetLength - 1) {
                numberOfIterations++;
                iterationCounter.innerHTML = numberOfIterations;
                if (testString === target) {
                    button.disabled = false;
                    return alert(target);
                } else {
                    return generateStringRandomly();
                }
            }
        }
    };

    button.addEventListener("click", () => {
        console.log("button clicked");
        generateStringRandomly();
    })

})();