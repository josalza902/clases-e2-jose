use CentroMédicoAcme;
db.createCollection("oficinas",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["codigo","piso","activo"],
            properties:{
                codigo:{
                    bsonType:"string"
                
                },
                piso:{
                    bsonType:"int"
                                    },
                activo:{
                    bsonType:"bool"
                },
            }
        }
    }
});
db.createCollection("medicinas",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["codigo","nombre","activo"],
            properties:{
                codigo:{
                    bsonType:"string"
                    
                    
                },
                nombre:{
                    bsonType:"string"
                },
                descripcion:{
                    bsonType:"string"
                    
                },
                activo:{
                    bsonType:"bool"
                }
                
            }
        }
    }
});
db.createCollection("personas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["identificacion", "primerNombre", "apellido", "email", "numeroDeTelefono", "tipoDeSangre", "direccion"],
            properties: {
                identificacion: {
                    bsonType: "string",
                    pattern: "^[0-9]{12}$",
                    description: "El número de identificación debe ser una cadena de 12 dígitos."
                },
                primerNombre: {
                    bsonType: "string"
                },
                apellido: {
                    bsonType: "string"
                },
                email: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$",
                    description: "El email debe ser un formato de correo electrónico válido."
                },
                numeroDeTelefono: {
                    bsonType: "string",
                    pattern: "^[0-9]{10}$",
                    description: "El número de teléfono debe ser una cadena de 10 dígitos."
                },
                tipoDeSangre: {
                    bsonType: "string",
                    enum: ["O+", "O-", "A+", "A-", "B+", "B-"],
                    description: "El tipo de sangre debe ser uno de los valores permitidos."
                },
                direccion: {
                    bsonType: "string"
                }
            }
        }
    }
});
db.createCollection("doctores", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["persona_id", "codigo", "especialidad", "fechaDeInicio", "activo"], // Corregido: 'especialidad' añadido
            properties: {
                persona_id: {
                    bsonType: "objectId",
                    description: "Referencia al ID de la persona en la colección 'personas'."
                },
                codigo: {
                    bsonType: "string", 
                    description: "Código del doctor."
                },
                especialidad: { 
                    bsonType: "string"
                },
                fechaDeInicio: {
                    bsonType: "date"
                },
                activo: {
                    bsonType: "bool"
                }
            }
        }
    }
});
db.createCollection("citasMedicas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["fechaCita", "doctorId", "personId", "officeId", "diagnosticoClinico", "recomendaciones"],
            properties: {
                fechaCita: {
                    bsonType: "date"
                },
                doctorId: {
                    bsonType: "objectId",
                    description: "Referencia al ID del doctor."
                },
                personId: {
                    bsonType: "objectId",
                    description: "Referencia al ID de la persona (paciente)."
                },
                officeId: {
                    bsonType: "objectId",
                    description: "Referencia al ID de la oficina."
                },
                diagnosticoClinico: {
                    bsonType: "string"
                },
                recomendaciones: {
                    bsonType: "string"
                }
            }
        }
    }
});
db.createCollection("medicaciones", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["citasMedicasId", "medicinasId", "dosis"],
            properties: {
                citasMedicasId: {
                    bsonType: "objectId",
                    description: "Referencia al ID de la cita médica."
                },
                medicinasId: {
                    bsonType: "objectId",
                    description: "Referencia al ID de la medicina."
                },
                dosis: {
                    bsonType: "int"
                },
                notas: {
                    bsonType: "string"
                }
            }
        }
    }
});

db.personas.createIndex({ "identificacion": 1 }, { unique: true });
db.personas.createIndex({ "email": 1 });
db.doctores.createIndex({ "codigo": 1 }, { unique: true });
db.doctores.createIndex({ "persona_id": 1 });
db.citasMedicas.createIndex({ "doctorId": 1 });
db.citasMedicas.createIndex({ "fechaCita": 1 });
db.citasMedicas.createIndex({ "doctorId": 1, "fechaCita": 1 });
db.medicaciones.createIndex({ "citasMedicasId": 1 });
db.medicinas.createIndex({ "codigo": 1 }, { unique: true });
db.medicaciones.createIndex({ "medicinasId": 1 });