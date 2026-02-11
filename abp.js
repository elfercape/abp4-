// 1. Función para realizar operaciones matemáticas básicas
function calcular(operacion, num1, num2) {
  switch (operacion) {
    case 'sumar':
      return num1 + num2;
    case 'restar':
      return num1 - num2;
    case 'multiplicar':
      return num1 * num2;
    case 'dividir':
      return num2 !== 0 ? num1 / num2 : 'Error: No se puede dividir por cero.';
    default:
      return 'Operación no válida.';
  }
}

// 2. Función para recorrer un arreglo y devolver valores filtrados
function filtrarNumerosMayores(arr, limite) {
  return arr.filter((num) => num > limite);
}

// 3. Función para generar un objeto con datos de usuario
function crearUsuario(nombre, edad, ciudad) {
  return {
    nombre,
    edad,
    ciudad,
    descripcion: function () {
      return `${this.nombre} tiene ${this.edad} años y vive en ${this.ciudad}.`;
    },
  };
}

// 4. Función que usa un bucle para generar una tabla de multiplicar
function tablaMultiplicar(numero) {
  let resultado = [];
  for (let i = 1; i <= 10; i++) {
    resultado.push(`${numero} x ${i} = ${numero * i}`);
  }
  return resultado;
}

// 5. “Simulación” de ingreso de datos (puedes reemplazar con prompt si quieres)
let operacion = 'sumar'; // cambiar a "restar", "multiplicar" o "dividir"
let resultadoOperacion = calcular(operacion, 10, 5);
console.log(`Resultado de la operación (${operacion}):`, resultadoOperacion);

let numeros = [10, 25, 30, 5, 15, 40];
console.log('Números mayores que 20:', filtrarNumerosMayores(numeros, 20));

let usuario = crearUsuario('Sofía', 28, 'Rosario');
console.log(usuario.descripcion());

console.log('Tabla de multiplicar del 7:');
console.log(tablaMultiplicar(7).join('\n'));
