# Aplicación JavaScript – Evaluación del Módulo

Proyecto del módulo **Fundamentos de programación en JavaScript** basado en la consigna “Aplicación de consola”, adaptado a una interfaz web con HTML, Bootstrap 4 y ejecución en la consola del navegador. [file:1]

---

## 1. Objetivo del proyecto

El objetivo de esta aplicación es practicar los fundamentos de JavaScript mediante una pequeña app que permite: [file:1]

- Realizar operaciones matemáticas básicas.
- Implementar estructuras condicionales y de bucles.
- Usar funciones para modularizar el código.
- Trabajar con arreglos y objetos.
- Validar entradas del usuario para evitar errores. [file:1]

---

## 2. Tecnologías utilizadas

- HTML5 (estructura de la página).
- CSS a través de Bootstrap 4 para el maquetado y estilos.
- JavaScript puro (sin frameworks) para la lógica.
- Consola del navegador (Chrome, Firefox, etc.) para visualizar mensajes adicionales. [file:1]

---

## 3. Estructura del proyecto

Archivos principales:

- `index.html`: Contiene la interfaz de usuario con formularios y botones organizados en tarjetas de Bootstrap (operaciones, arreglo, usuario, tabla de multiplicar).
- `app.js`: Contiene toda la lógica en funciones, el manejo de eventos de los botones y las validaciones de entrada.
- (Opcional) `img/`: Carpeta con capturas de pantalla de la aplicación en funcionamiento. [file:1]

---

## 4. Funcionalidades implementadas

### 4.1 Operaciones matemáticas básicas

- Formulario con dos campos numéricos y un selector de operación: sumar, restar, multiplicar o dividir.
- Botón “Calcular” que ejecuta la función `calcular(operacion, num1, num2)`.
- Se utiliza un `switch` para determinar la operación y se valida la división por cero.
- El resultado se muestra en la página y también se registra en la consola con `console.log`. [file:1]

### 4.2 Trabajo con arreglos y filtros

- Se define un arreglo base de números, por ejemplo `[10, 25, 30, 5, 15, 40]`.
- En la interfaz se muestra el arreglo y un campo para ingresar un límite.
- Botón “Filtrar mayores” que llama a `filtrarNumerosMayores(arr, limite)` usando `Array.prototype.filter`.
- El resultado (números mayores al límite) se muestra en pantalla y en la consola. [file:1]

### 4.3 Objetos y métodos

- Formulario para capturar nombre, edad y ciudad del usuario.
- Botón “Crear usuario” que llama a `crearUsuario(nombre, edad, ciudad)`.
- La función devuelve un objeto con propiedades y un método `descripcion()` que arma una frase descriptiva.
- La descripción se muestra en la interfaz y se imprime en consola. [file:1]

### 4.4 Bucles y tabla de multiplicar

- Campo numérico para indicar el número de la tabla de multiplicar.
- Botón “Generar tabla” que llama a `tablaMultiplicar(numero)`.
- La función utiliza un bucle `for` para generar las 10 líneas de la tabla y devuelve un arreglo de strings.
- La tabla se muestra en un bloque `<pre>` y se envía a la consola. [file:1]

---

## 5. Estructuras de control y validaciones

En el código se utilizan: [file:1]

- Condicionales `if` para validar que los campos numéricos sean válidos (`isNaN`) y que la edad sea mayor que cero.
- `switch` para seleccionar la operación matemática.
- Bucles `for` para generar la tabla de multiplicar.
- Métodos de arreglos (`filter`) para el filtrado de números. [file:1]

Cuando la validación falla, se muestran mensajes de error mediante `alert()` y no se ejecuta la operación correspondiente. [file:1]

---

## 6. Cómo ejecutar el proyecto

1. Clona o descarga el repositorio (o carpeta ZIP).
2. Abre el archivo `index.html` en tu navegador.
3. Abre la consola del navegador (F12 → pestaña “Consola”).
4. Interactúa con los formularios y botones:
   - Realiza operaciones matemáticas.
   - Filtra el arreglo por un límite.
   - Crea un usuario y muestra su descripción.
   - Genera tablas de multiplicar.
5. Observa tanto los resultados en la página como los mensajes en la consola. [file:1]

---

## 7. Criterios de evaluación cubiertos

Esta implementación cumple con los criterios indicados en la consigna: [file:1]

- Correcta aplicación de fundamentos de JavaScript (variables, funciones, condicionales, bucles).
- Uso de funciones para modularizar la lógica principal (`calcular`, `filtrarNumerosMayores`, `crearUsuario`, `tablaMultiplicar`).
- Uso de estructuras de control (`if`, `switch`, `for`) y métodos de arreglos.
- Manejo de objetos (usuario con método `descripcion`).
- Validación de entradas del usuario y manejo básico de errores.
- Código organizado, con nombres descriptivos y separación entre HTML y JS. [file:1]

---

## 8. Capturas de pantalla sugeridas

Para la entrega, se recomienda incluir capturas de: [file:1]

- Vista general de la página mostrando todas las tarjetas (operaciones, arreglo, usuario, tabla).
- Ejemplo de una operación matemática realizada.
- Resultado de un filtrado de números.
- Descripción de un usuario creado.
- Tabla de multiplicar generada. [file:1]

---

## 9. Referencias

Algunas referencias sugeridas en la consigna original: [file:1]

- MDN Web Docs – JavaScript.
- W3Schools – JavaScript Tutorial.
- JavaScript.info.
- FreeCodeCamp (para ejercicios adicionales).
- Ejemplos de JavaScript en GitHub. [file:1]
