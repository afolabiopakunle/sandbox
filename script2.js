function square(num) {

    let tString = num.toString();
    strings = '';
    for(let i = 0; i < tString.length; i++) {
        let newNum = Number(tString[i])
        strings += (newNum * newNum)
    }
    console.log(strings);
    console.log(num);
    console.log(tString);
    return strings;
}

square(687)