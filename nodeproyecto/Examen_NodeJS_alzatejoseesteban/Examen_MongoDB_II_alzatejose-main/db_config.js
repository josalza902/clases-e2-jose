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
db.createCollection("personas",{
    validator:{
        $jsonSchema:{
            required:["identificacion","primerNombre","apellido","email","numeroDeTelefono","tipoDeSangre","direccion"],
            properties:{
                identificacion:{
                    bsonType:"string",
                    pattern:"^[0-9]{12}$"
                },
                primerNombre:{
                    bsonType:"string"  
                },
                apellido:{
                    bsonType:"string"
                },
                email:{
                    bsonType:"string"
                    
                },
                numeroDeTelefono:{
                    bsonType:"string",
                    pattern:"^[0-9]{10}"
                },
                tipoDeSangre:{
                    bsonType:"string",
                    enum:["O+","O-","A+","A-","B+","B-"]
                },
                direcciones:{
                    bsonType:"string"
                    
                }
            }
        }
    }
});
db.createCollection("doctores",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["persona_id","codigo","especializacion","fechaDeInicio","activo"],
            properties:{
                codigo:{
                    bsonType:"int",
                },
                especialidad:{
                    bsonType:"string",
                },
                fechaDeInicio:{
                    bsonType:"date"
                },
                activo:{
                    bsonType:"bool",
                }
            }
        }
    }
});
db.createCollection("citasMedicas",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["fechaCita","doctorId","personId","officeId","diagnosticoClinico","recomendaciones"],
            properties:{
                fechaCita:{
                    bsonType:"date"
                },
                diagnosticoClinico:{
                    bsonType:"string"
                },
                recomendaciones:{
                    bsonType:"string"

                }
            }
        }
    }
});
db.createCollection("medicaciones",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["citasMedicasId","medicinasId","dosis"],
            properties:{
                dosis:{
                    bsonType:"int",
                },
                notas:{
                    bsonType:"string",
                    

                }
            }
        }
    }
})

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