console.log("Log");
console.info("Info");
console.error("Error");
console.warn("Warn");

var tabla = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "D",
  },
];

// console.table(tabla);
console.group('conver');
console.log('Hola');
console.log('Bla bla');
console.log('Adios');
console.groupEnd('conver');

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');