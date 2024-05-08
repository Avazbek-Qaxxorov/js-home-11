function reverseNumber(k) {
    let i = k.toString().split('').reverse().join('');
     return parseInt(i) * Math.sign(k);
 }

 let result = reverseNumber(123);
 document.write(result)