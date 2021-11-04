let sum1 = 0
let sum2 = 0

for (let number = 2;number <= 10000; number = number + 1){

    let isPrime = true

    for (let i = 2; i <= number - 1; i = i + 1) {
        
         if (number % i === 0 ) {
        //     console.log('素数でない')
          　isPrime = false
             break
        }
    }

    if (isPrime) {
        // console.log(number)
        if (number % 3 === 1){
            sum1 = sum1 + 1
        } else if (number % 3 === 2){ 
            sum2 = sum2 + 1
        }
    }
}

console.log('3で割ったら1余る整数の数：' + sum1)
console.log('3で割ったら2余る整数の数：' + sum2)