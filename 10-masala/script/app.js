function abbrevName(name){

    // code away
  let arr = name.split(' ')
    let str = []
    for (let i = 0 ; i < arr.length ; i++){
        str.push(arr[i].substring(0, 1))
    }
    return str.join(".").toUpperCase()
}

let name = "Jack Richer";

let result = abbrevName(name);

document.write(result)