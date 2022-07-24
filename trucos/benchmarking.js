let suma = 0;

console.time('bucle');

for (let index = 0; index < 1000000000; index++) {
    suma += 1;
}

console.time('asincrono');
asincrona()
    .then(()=>{
        console.timeEnd('asincrono');
    });

function asincrona(){
    return new Promise((resolve) => {
        setTimeout(function(){
            console.log('Termino mi funcion asincrona');
            resolve();
        })
    })
}

console.timeEnd('bucle');