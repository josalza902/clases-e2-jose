users={
    name:'users',
    email:'email',
    position:'position',
    area:'area',
};
tasks={
    name:'tasks',
    descripcion:'descripcion',
    startdate:'startdate',
    enddate:'enddate',
    status:'status',
    priority:'priority',
    responsables:[users],
};
workspace={
    name:'workspace',
    description:'description',
    workgroup:[users],
    tasks:[tasks],
};

db.createcollection("users",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            require:["name","email","position","area"],
            properties:{
                name:{bsonType:"string"},
                email:{bsonType:"string"},
                position:{bsonType:"string"},
                area:{bsonType:"string"}
            }
        }
    }
})
db.createcollection("tasks",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            require:["name","description","stardate","enddate","status","priority","responsables"],
            properties:{
                name:{bsonType:"string"},
                descripcion:{bsonType:"string"},
                startDate:{bsonType:"Date"},
                status:{bsonType:"Date"},
                priority:{bsonType:"Date"},
                responsables:{bsonType:"Date"},
            }
        }
    }
});

db.createCollection("workSpace",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name","description","workGroup","tasks"],
            properties:{
                name: { bsonType: "string" },
                description: { bsonType: "string" },
                workGroup: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["name", "email", "position", "area"],
                        properties: {
                            name: { bsonType: "string" },
                            email: { bsonType: "string", pattern: "^.+@.+\..+$" },
                            position: { bsonType: "string" },
                            area: { bsonType: "string" }
                        }
                    }
                },
                tasks: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["name", "description", "startDate", "endDate", "status", "priority", "responsables"],
                        properties: {
                            name:{bsonType:"string"},
                            description:{bsonType:"string"},
                            startDate:{bsonType:"date"},
                            endDate:{bsonType:"date"},
                            status:{bsonType:"string"},
                            priority:{bsonType:"string"},
                            responsables:{bsonType:"array"}
                        }
                    }
                }
            }
        }
    }
})
