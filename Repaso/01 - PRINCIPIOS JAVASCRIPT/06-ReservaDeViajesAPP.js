class Reserva {
    constructor(nombreCliente, destino, costo) {
        this.nombreCliente = nombreCliente;
        this.destino = destino;
        this.costo = costo;
    }

    mostrarDetalleReserva() {
        return `Reserva a nombre de: ${this.nombreCliente} \n Destino: ${this.destino} \n Costo: ${this.costo}`;
    }
}

class ReservarVuelo extends Reserva {
    constructor(nombreCliente, destino, costo, numVuelo, clasePasaje) {
        super(nombreCliente, destino, costo);
        this.numVuelo = numVuelo;
        this.clasePasaje = clasePasaje;
    }

    calcularCostoFinal() {
        let recargo = 0;
        if (this.clasePasaje === "business") recargo = 200;
        else if (this.clasePasaje === "primera clase") recargo = 500;

        return this.costo + recargo;
    }

    mostrarDetalleReserva() {
        return `${super.mostrarDetalleReserva()}
    \nNúmero de Vuelo: ${this.numVuelo}\nClase: ${this.clasePasaje
            }\nCosto Final: $${this.calcularCostoFinal()}`;
    }
}

class ReservaHotel extends Reserva {
    constructor(
        nombreCliente,
        destino,
        costoPorNoche,
        numeroNoches,
        tipoHabitacion
    ) {
        super(nombreCliente, destino, costoPorNoche * numeroNoches);
        this.costoPorNoche = costoPorNoche;
        this.numeroNoches = numeroNoches;
        this.tipoHabitacion = tipoHabitacion;
    }

    calcularCostoFinal() {
        return this.costoPorNoche * this.numeroNoches;
    }

    mostrarDetalleReserva() {
        return `${super.mostrarDetalleReserva()}\nTipo de Habitación: ${this.tipoHabitacion
            }\nNúmero de Noches: ${this.numeroNoches
            }\nCosto Final: $${this.calcularCostoFinal()}`;
    }
}

const reservarVuelo = new ReservarVuelo(
    "Diego",
    "Italia",
    10000,
    "AA500",
    "business"
);

const reservaHotel = new ReservaHotel("Diego", "Italia", 1000, 5, "Premium")

console.log(reservarVuelo.mostrarDetalleReserva());
console.log(reservaHotel.mostrarDetalleReserva());
