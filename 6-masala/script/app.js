function past(h, m, s){
    //#Happy Coding! ^_^
      let milliseconds = 0;
    if (h >= 0 && h <= 23){
      milliseconds += (h * 3600000);
    };
    if (m >= 0 && m <= 59){
      milliseconds += (m * 60000);
    };
    if (s >= 0 && s <= 59){
      milliseconds += (s * 1000);
    };
    
    return milliseconds;
  }