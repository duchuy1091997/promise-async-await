let dientich = (a, b, h) => {
    return (a + b) * h/2;
}

console.log(dientich(2, 3, 4));

let add = (a, b, cb) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number'){
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined, a + b);
    }, 1000)
}

add(4, 5, (err, result) => {
    if(err){
        return console.log(err);
    }
    else{
        console.log('Ket qua:' + result);
    }
});