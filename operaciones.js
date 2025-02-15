const operaciones = {
    sumar(a, b) {
        return a + b;
    },
    
    restar(a, b) {
        return a - b;
    },
    
    multiplicar(a, b) {
        return a * b;
    },
    
    dividir(a, b) {
        if (b === 0) {
            return "Error: No se puede dividir por cero.";
        }
        return a / b;
    },
    
    mostrarMenu() {
        return prompt(
            "Seleccione una operación:\n" +
            "1. Sumar\n" +
            "2. Restar\n" +
            "3. Multiplicar\n" +
            "4. Dividir\n" +
            "5. Salir"
        );
    },
    
    obtenerNumero(mensaje) {
        let num;
        do {
            num = parseFloat(prompt(mensaje));
        } while (isNaN(num));
        return num;
    },
    
    calcular(opcion, num1, num2) {
        switch (opcion) {
            case "1":
                return this.sumar(num1, num2);
            case "2":
                return this.restar(num1, num2);
            case "3":
                return this.multiplicar(num1, num2);
            case "4":
                return this.dividir(num1, num2);
            default:
                return "Opción no válida.";
        }
    }
};

export default operaciones;
