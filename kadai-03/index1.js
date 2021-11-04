const number = parseInt(process.argv[2])

let isPrime = true

for (let i = 2; i <= number - 1; i = i + 1) {
    
    if (number % i === 0 ) {
        console.log('素数でない')
        isPrime = false
        break
    } 
}

if (isPrime) {
    console.log(number)
}