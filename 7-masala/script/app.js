function isPrime(n) {
    // show me the code!
    let n = 17
  
  
      if (n <= 1) return false

      for (let i = 2 ; i < n ; i++){

          if (n % i == 0)return false

      }
      
      return true
  
  }

  let result = isPrime(17);

  document.write(result)