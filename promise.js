let newPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Da thuc thi");
    }, 1000);
    //reject("Ko the thuc thi");
});

newPromise.then((msg) => { console.log(msg),
    (errMsg) => { console.log(errMsg + " "); }
});