const sentence = 'Hello World';
console.log(sentence);

const characterNum = [...sentence].reduce((prev, cur) => {
    const group = cur!==' ' ? cur : 0; // make character key
    // if (key==='')
    if (!prev[group] && group!==0) {
        prev[group] = '';
    }
    // prev[group]
    return prev;
}, {})


Object.keys(characterNum).forEach((index) =>{
    let counter=0;
    [...sentence].forEach((value) => {
        if (index === value) {
                counter++;
        }
    })
    characterNum[index] = counter; //Push Numbers to characterNum
})

console.log(characterNum);