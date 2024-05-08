// let num = +prompt("Istalgan son kiriting: ");

// let number = +prompt("Istalgan ikkinchi son kiriting: ");

// // let num = [2,3]

// function numbers(num) {

//     for (let i = 0; i < num.length; i++) {
//         document.write(num[i]);
//     }
//     return num ** number;
// }
// let result = numbers(num);

// document.write(result)

// function numbers(a,b) {
//     this.a = a;
//     this.b = b;
//     this.sum = this.a ** this.b;

//     this.outPut = function () {
//         document.write(this.sum);
//     }
// }
// let number = new numbers(2, 3);
// number.outPut()




function numberPower(num,num1) {
    if(num1 === 1)return 1

    let sum = 1
    for(let i = 0; i < num1; i++) {
        sum *= num
    }
    return sum
}

let num = 2
let num1 = 3

let result = numberPower(num, num1)

document.write(result)