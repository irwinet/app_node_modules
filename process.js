// const p = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
})

process.on('exit', () => {
    console.log('Ale, el proceso acabo');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
})

process.on('uncaughtException', (err, origin) => {
    console.error('Vaya se nos ha olvidado capturar el error');
    console.error(err);
})

process.on('uncaughtRejection', () => {
    console.log('Promesas rechazadas');
})

// funcionQueNoExiste();

setTimeout(() => {
    console.log('Esto se va a ver');
}, 0);