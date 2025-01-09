// 一个人设定一组四码的数字作为谜底，另一方猜。
// 每猜一个数，出题者就要根据这个数字给出提示，提示以XAYB形式呈现，直到猜中位置。
// 其中X表示位置正确的数的个数（数字正确且位置正确），而Y表示数字正确而位置不对的数的个数。
// 例如，当谜底为8123，而猜谜者猜1052时，出题者必须提示0A2B。
// 例如，当谜底为5637，而猜谜者猜4931时，出题者必须提示1A0B。
// 当前已知N组猜谜者猜的数字与提示，如果答案确定，请输出答案，不确定则输出NA。

function main(guess, hints) {
    let answer = '';
    for (let i = 0; i <= 9999; i++) {
        let num = String(i).padStart(4, 0);
        let rightHintCount = 0;
        for (let j = 0; j < guess.length; j++) {
            if (generateHint(num, guess[j]) === hints[j]) {
                rightHintCount++
            }
        }
        if (rightHintCount === hints.length) {
            if (answer) {
                return 'NA'
            } else {
                answer = num
            }
        }
    }
    return answer ? answer : 'NA'
}

function generateHint(answer, guess) {
    let ACounts = 0, BCounts = 0;
    let answerArr = answer.split('');
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === answer[i]) {
            ACounts++
            answerArr[i] = 'x'
        }
    }
    for (let i = 0; i < guess.length; i++) {
        let index = answerArr.indexOf(guess[i]);
        if (index > -1) {
            BCounts++
            answerArr[index] = 'x'
        }
    }
    return `${ACounts}A${BCounts}B`
}

console.log(main(['1234', '5678', '9012'], ['1A2B', '0A1B', '0A0B']));
console.log(main(['0000', '1111'], ['4A0B', '0A0B'])); // 0000
console.log(main(['1052', '1211'], ['0A2B', '0A4B']));
console.log(main(['1052', '5631', '1657'], ['0A1B', '3A0B', '2A1B']));  // 5637
