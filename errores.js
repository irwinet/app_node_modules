function serompe() {
    return 3 + z;
}

try {
    serompe();    
} catch (error) {
    console.log('Vaya, algo se ha roto');
    console.log(error.message);
}