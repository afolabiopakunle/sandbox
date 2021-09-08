function duplicateCount(text){
    //...
    obj = {};
    counter = 0
    for(let i = 0; i < text.length; i++) {
      if(!obj[text[i]]) {
        obj[text[i]] = 1;
      } else {
         if(obj[text[i]] < 2) {
             obj[text[i]] += 1;
             counter++
         }
      }
    }
    console.log(counter);
    return obj;
  }

  console.log(duplicateCount('afa0000olabiii'));