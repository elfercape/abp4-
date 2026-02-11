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

// 5. Datos iniciales y "consola" del navegador
const numeros = [10, 25, 30, 5, 15, 40];
console.log('Aplicación iniciada. Arreglo base:', numeros);

// Mostrar arreglo base en la página
document.getElementById('listaNumeros').textContent = `[${numeros.join(', ')}]`;

// Eventos de botones

// Operaciones matemáticas
document.getElementById('btnCalcular').addEventListener('click', function () {
  const n1 = Number(document.getElementById('num1').value);
  const n2 = Number(document.getElementById('num2').value);
  const op = document.getElementById('operacion').value;

  if (isNaN(n1) || isNaN(n2)) {
    alert('Por favor, ingresa números válidos.');
    return;
  }

  const resultado = calcular(op, n1, n2);
  document.getElementById('resultadoOperacion').textContent = resultado;
  console.log(`Resultado de la operación (${op}):`, resultado);
});

// Filtro de números
document.getElementById('btnFiltrar').addEventListener('click', function () {
  const limite = Number(document.getElementById('limiteFiltro').value);

  if (isNaN(limite)) {
    alert('Ingresa un límite numérico válido.');
    return;
  }

  const filtrados = filtrarNumerosMayores(numeros, limite);
  document.getElementById('resultadoFiltro').textContent = `[${filtrados.join(', ')}]`;
  console.log(`Números mayores que ${limite}:`, filtrados);
});

// Objeto usuario
document.getElementById('btnCrearUsuario').addEventListener('click', function () {
  const nombre = document.getElementById('nombreUsuario').value.trim();
  const edad = Number(document.getElementById('edadUsuario').value);
  const ciudad = document.getElementById('ciudadUsuario').value.trim();

  if (!nombre || !ciudad || isNaN(edad) || edad <= 0) {
    alert('Completa nombre, edad (>0) y ciudad correctamente.');
    return;
  }

  const usuario = crearUsuario(nombre, edad, ciudad);
  document.getElementById('descripcionUsuario').textContent = usuario.descripcion();
  console.log(usuario.descripcion());
});

// Tabla de multiplicar
document.getElementById('btnTabla').addEventListener('click', function () {
  const numero = Number(document.getElementById('numeroTabla').value);

  if (isNaN(numero)) {
    alert('Ingresa un número válido para la tabla.');
    return;
  }

  const tabla = tablaMultiplicar(numero);
  document.getElementById('resultadoTabla').textContent = tabla.join('\n');
  console.log(`Tabla de multiplicar del ${numero}:\n${tabla.join('\n')}`);
});
