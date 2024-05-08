function createArray(number){
    let newArray = [];
    
    for(let counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }

  let result = createArray(10);
  document.write(result)