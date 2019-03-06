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

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                reject(new Error('Tham so phai la kieu number!!!'));
            }
            resolve(a * b);
        }, 1000); 
    });
}

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                reject(new Error('Tham so phai la kieu number!!!'));
            }
            if(b === 0) return reject(new Error('Loi chi cho 0'));
            resolve(a / b);
        }, 1000); 
    });
}

let dienTichHinhThang1 = (a, b, h) => {
    add(a, b)
    .then(resolve => multiply(resolve, h))
    .then(res => divide(res, 2))
    .then(square => console.log("dt:" + square))
    .catch(reject => console.log(reject + ""))
}

let dienTichHinhThang2 = (a, b, h) => {
    return add(a, b)
    .then(resolve => multiply(resolve, h))
    .then(res => divide(res, 2))
}

dienTichHinhThang2(2, 4, 6)
.then(square => console.log("Dien tich:" + square))
.catch(err => console.log(err + ""))

// add(4, '5')
// .then(resolve => add(resolve, 6))
// .then(resolve => console.log("Ket qua:" + resolve))
// .catch(reject => console.log(reject + ""))