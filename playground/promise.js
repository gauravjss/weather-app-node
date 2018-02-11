var asyncAdd = (a,b)=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b ==='number'){
                resolve(a+b);
            }else{
                reject('Arguments must be numbers');
            }
        },1500);
    })
};

//Promise Chaining, This one fails in case first promise rejects.
asyncAdd(10,'7').then((res)=>{
      console.log(res);
      return asyncAdd(res,33);
    },(errorMessage)=>{
      console.log(errorMessage);
    }
).then((res)=>{
    console.log(res);
    return asyncAdd(res,33);
}, (errorMessage) =>{
    console.log(errorMessage);
}).then((res)=>{
    console.log(res);
}, (errorMessage) =>{
    console.log(errorMessage);
});

//Promise Chaining, Catch Block is Fail Safe even if one promise fails.s
asyncAdd(10,'7').then((res)=>{
        console.log(res);
        return asyncAdd(res,33);
    }).then((res)=>{
    console.log(res);
    return asyncAdd(res,33);
}).then((res)=>{
    console.log(res);
}).catch((errorMessage)=>{
    console.log(errorMessage);
});

/*
// Simple example without any operation
var somePromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
    // Only one would work, first instance.
    resolve('Hey, It Worked !');
    resolve('Hey, It Worked again !');
    reject('Unable to fulfill promise');
},2500);
});

somePromise.then((message)=>{
    console.log('Success: ', message);
},(errorMessage)=>{
    console.log('Error: ', errorMessage);
});*/