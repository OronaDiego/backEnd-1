class Contador {
    constructor(nombre){
        this.nombre = nombre;
        this.contador = 0;
    }

    static contadorGlobal = 0;

    getResponsable(){
        return this.nombre;
    }

    getCuentaGlobal(){
        return Contador.contadorGlobal;
    }

    getCuentaIndividual(){
        return this.contador;
    }

    contar(){
        Contador.contadorGlobal++;
        this.contador++;
    }
};

const responsable1 = new Contador('Pablo');
const responsable2 = new Contador('Dalila');

responsable1.contar()
responsable1.contar()
console.log(responsable1);
console.log(responsable2);

console.log(Contador.contadorGlobal);


// console.log(responsable1.getResponsable());
// console.log(responsable2.getResponsable());
// responsable1.contar();  //sumo a pablo
// responsable1.contar();  //sumo a pablo
// responsable2.contar();  //sumo a dalila
// console.log(Contador.contadorGlobal);   //3
// console.log('contador de pablo: ', responsable1.getCuentaIndividual());
// console.log('contador de dalila: ', responsable2.getCuentaIndividual());
// responsable2.contar();  //sumo a dalila
// responsable2.contar();  //sumo a dalila
// console.log('---------se sumaron 2  a dalila---------');
// console.log('contador de dalila: ', responsable2.getCuentaIndividual());
// console.log('contador de pablo: ', responsable1.getCuentaIndividual());
// console.log('cuenta global', Contador.contadorGlobal);


