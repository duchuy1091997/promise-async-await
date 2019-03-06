let add = (a, b, cb) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number'){
            return cb(new Error('Tham so ko phai kieu number'));
        }
        else{
            cb(undefined, a + b);
        }
    }, 1000);
}

let multiply = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return console.log(new Error('Tham so phai co kieu number'));
        }
        cb(undefined, a * b);
    }, 1000);
}

let divide = (a, b, cb) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number'){
            return console.log(new Error('Tham so phai la kieu number'));
        }
        else if(b == 0){
            return console.log(new Error('Loi chia cho 0'));
        }
        else{
            cb(undefined, a / b);
        }
    }, 1000)
}

let dienTichHinhThang = (a, b, h, cb) => {
    add(a, b, (err, result) => {
        if(err) return cb(err);
        multiply(result, h, (err, result) => {
            if(err) return cb(err);
            divide(result, 2, (err, result) => {
                if (err) return cb(err);
                cb(undefined, result);
            });
        });
    });
}

dienTichHinhThang(2, 3, 2, (err, result) => {
    if(err){
        console.log(err + " ");
    }
    else{
        console.log("dt hinh thang ", result);
    }
});
// add(4, 5, (err, result) => {
//     if(err){
//         return console.log(err);
//     }
//     else{
//         console.log('Ket qua:' + result);
//     }
// });

// divide(9, 2, (err, result) => {
//     if(err){
//         return console.log(err);
//     }
//     else{
//         return console.log(result);
//     }
// });

// multiply(3, 4, (err, result) => {
//     if(err){
//        return console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// });