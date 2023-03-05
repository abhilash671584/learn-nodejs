//Multiple log statements are put just to track the flow
console.log('Step1')
console.log('Step2')
//JS doesnt stop the flow here. 
//Instead it processes the callback for setTimeout asynchronously
setTimeout(()=> {
    console.log('Step3: I am async')
}, 1000);
console.log('Step4')

