const checkEven = () => {
    let param = Math.floor(Math.random() * 10);
    console.log('param ', param)
    if (param % 2 !== 0)
        return true;
    else
        return true;
}


const fetchData = () => {
    console.log('Step1')
    const promise = new Promise((resolve, reject) => {
        console.log('Step3')
        setTimeout(() => {
            if (checkEven())
                resolve('Done!!');
            else
                reject('Oops !! error')
        }, 1500);
        console.log('Step4')
    });
    console.log('Step2')
    return promise;
};


setTimeout(() => {
    console.log('Step11')
    fetchData().then(msg => {
        
        console.log('Successful ! ', msg);
        // return fetchData();
    }
    ).then(res => {
        console.log(res)
        
    })
    .catch(error => {
        console.log('Failed ! ', error)
    });
    console.log('Step12')
}, 1500)



