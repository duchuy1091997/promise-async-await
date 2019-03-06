let fs = require('fs');

// fs.readFile('./a.txt', 'utf8', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

let data = fs.readFileSync('./a.txt', 'utf8');
console.log(data);
console.log('ket thuc');