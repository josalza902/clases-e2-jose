db.oficinas.insertMany([
    {
        codigo:"O01",
        piso:1,
        activo:true
    },
    {
        codigo:"O02",
        piso:1,
        activo:true
    },
    {
        codigo:"O03",
        piso:2,
        activo:true
    }
    
]);
db.personas.insertMany([
    {
        identificacion:"100001",
        primerNombre:"gabriel",
        apellido:"Mendez Pardo",
        email:"mpardo@mail.com",
        numeroDeTelefono:"5552631",
        tipoDeSangre:"O+",
        direcciones:"Cl 85 # 13 - 65"
    },
    {
        identificacion:"100002",
        primerNombre:"Juana",
        apellido:"Levi Zuñiga",
        email:"jlevi@mail.com",
        numeroDeTelefono:"5558745",
        tipoDeSangre:"AB-",
        direcciones:"Cl 68 # 7 - 58"
    },
    {
        identificacion:"100003",
        primerNombre:"Pedro",
        apellido:"Pascal Lemus",
        email:"ppascal@mail.com",
        numeroDeTelefono:"5557487",
        tipoDeSangre:"O+",
        direcciones:"Cr 100 # 65 - 85"
    },
    {
        identificacion:"100004",
        primerNombre:"Anai",
        apellido:"Monterrosa Li",
        email:"amonterrosa@mail.com",
        numeroDeTelefono:"5553145",
        tipoDeSangre:"O-",
        direcciones:"AV. 68 # 01 - 25"
    },
    {
        identificacion:"100005",
        primerNombre:"Camilo",
        apellido:"Arnau Hernandez",
        email:"carnau@mail.com",
        numeroDeTelefono:"5554678",
        tipoDeSangre:"O+",
        direcciones:"Cr 56 # 25 - 56"
    },

]);
db.medicinas.insertMany([
    {
        codigo:"M01",
        nombre:"Amoxicilina",
        activo:true
    },
    {
        codigo:"M02",
        nombre:"Ibuprofeno",
        activo:true
    },
    {
        codigo:"M01",
        nombre:"Omeprazol",
        activo:true
    },
    {
        codigo:"M01",
        nombre:"Hidroxido de aluminio",
        descripcion:"Controla la acidez estomacal.",
        activo:true
    }
]);
db.doctores.insertMany([
    {
        persona_id:"6868203e1397db24fcc9cd4d",
        codigo:"D001",
        especialidad:"Medicina General",
        fechaDeInicio:"1/1/2024",
        activo:true
    },
    {
        persona_id:"6868203e1397db24fcc9cd4d",
        codigo:"D001",
        especialidad:"Medicina General",
        fechaDeInicio:"1/1/2024",
        activo:true
    },
    
])