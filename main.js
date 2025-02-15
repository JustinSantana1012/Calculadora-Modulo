import operaciones from './operaciones.js';

function iniciarCalculadora() {
    let opcion;

    
    do {
        opcion = operaciones.mostrarMenu();

        if (opcion >= "1" && opcion <= "4") {
            let num1 = operaciones.obtenerNumero("Ingrese el primer número:");
            let num2 = operaciones.obtenerNumero("Ingrese el segundo número:");
            let resultado = operaciones.calcular(opcion, num1, num2);
            alert(`Resultado: ${resultado}`);
        } else if (opcion !== "5") {
            alert("Opción no válida. Inténtelo de nuevo.");
        }
    } while (opcion !== "5");
    
    mostrarBotonCalculadora();
    alert("Gracias por usar la calculadora.");
}


iniciarCalculadora();
