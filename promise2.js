let fs = require('fs');

let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                reject(new Error('Tham so phai la kieu number!!!'));
            }
            resolve(a + b);
        }, 1000); 
    });
}

// add('4', 5)
// .then((result) => {console.log("Ket qua:" + result);}, (err) => {console.log(err + "");})

// let data = fs.readFile('./a.txt', 'utf8', (err, data) => {
//     if(err){
//         console.log(err + '');
//     }
//     console.log(data);
// });

// let promiseReadFile = new Promise((resolve, reject) => {
//     fs.readFile('./a.txt', 'utf8', (err, data) => {
//         if(err){
//             reject(err + "");
//         }
//         resolve(data);
//     });
// });

let read = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if(err){
                reject(new Error("Loi file"));
            }
            resolve(data);
        });
    });
}

read('./a.txt')
.then((resolve) => {console.log(resolve);}, 
(reject) => {console.log(reject + "");});

//promiseReadFile.then((resolve) => console.log(resolve), (reject) => console.log(reject + ""));