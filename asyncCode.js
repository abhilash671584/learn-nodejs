console.log('Step1')
console.log('Step2')
setTimeout(()=> {
    console.log('Step3: I am async')
}, 1000);
console.log('Step4')

console.log(Math.ceil(Math.random() * 10))
