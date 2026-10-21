//Definiciónnde una función constructor

function Vehiculo (marca, modelo, anio){
    this.marca =  marca;
    this.modelo = modelo;
    this.anio = anio;
    this.saludar = () => {
        return `Este vehículo es un ${this.marca} ${this.modelo} ${this.anio}`;
    }
}

const carro1 = new Vehiculo("Dodge", "Stratus", 2006);
console.log(carro1.saludar());

