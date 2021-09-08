
//  let checkSum = (a, b) => (a === 100 || b === 100 || a + b === 100);

//  console.log(checkSum(40, 100))

//  const findExtention = (fileName) => {
//      const index = (fileName.lastIndexOf('.'));
//      const splited = fileName.split('');
//      let test = splited.splice(index, splited.length - index);
//      let result = test.join();
//      result = result.replace(/,/g,'')
//      return result
//  }

//  const findExtention2 = fileName => fileName.slice(fileName.lastIndexOf('.'))

//  console.log(findExtention2('area.xyx'));

let nextCharacterReplacer = (text) => {
    let lowerCases = text.toLowerCase();
    let arrayAlphabets = [...lowerCases];
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let results = [];
    arrayAlphabets.forEach(alphabet => {
        let i = alphabets.indexOf(alphabet);
        result = alpahbets[i + 1];
    })

    
    console.log(results)
}

nextCharacterReplacer('afolabi')