db.citasMedicas.aggregate([
    {
      $match: {
        doctorId: "ID_DEL_DOCTOR", 
        fechaCita: {
          $gte: ISODate("FECHA_INICIO"),
          $lte: ISODate("FECHA_FIN") 
        }
      }
    },
    {
      $lookup: {
        from: "personas",
        localField: "personId",
        foreignField: "identificacion",
        as: "pacienteInfo"
      }
    },
    {
      $unwind: "$pacienteInfo"
    },
    {
      $project: {
        _id: 0,
        identificacionPaciente: "$pacienteInfo.identificacion",
        nombrePaciente: "$pacienteInfo.primerNombre",
        apellidoPaciente: "$pacienteInfo.apellido",
        emailPaciente: "$pacienteInfo.email",
        telefonoPaciente: "$pacienteInfo.numeroDeTelefono",
        fechaCita: "$fechaCita",
        diagnostico: "$diagnosticoClinico"
      }
    }
  ]);db.citasMedicas.aggregate([
    {
      $match: {
        personId: "ID_DEL_PACIENTE" 
      }
    },
    {
      $lookup: {
        from: "personas",
        localField: "personId",
        foreignField: "identificacion",
        as: "pacienteInfo"
      }
    },
    {
      $unwind: "$pacienteInfo"
    },
    {
      $lookup: {
        from: "medicaciones",
        localField: "_id",
        foreignField: "citasMedicasId",
        as: "recetaMedica"
      }
    },
    {
      $unwind: {
        path: "$recetaMedica",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $lookup: {
        from: "medicinas",
        localField: "recetaMedica.medicinasId",
        foreignField: "codigo",
        as: "medicamentoInfo"
      }
    },
    {
      $unwind: {
        path: "$medicamentoInfo",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $group: {
        _id: "$_id",
        identificacionPaciente: { $first: "$pacienteInfo.identificacion" },
        primerNombrePaciente: { $first: "$pacienteInfo.primerNombre" },
        apellidoPaciente: { $first: "$pacienteInfo.apellido" },
        emailPaciente: { $first: "$pacienteInfo.email" },
        telefonoPaciente: { $first: "$pacienteInfo.numeroDeTelefono" },
        tipoDeSangrePaciente: { $first: "$pacienteInfo.tipoDeSangre" },
        direccionPaciente: { $first: "$pacienteInfo.direcciones" },
        fechaCita: { $first: "$fechaCita" },
        diagnostico: { $first: "$diagnosticoClinico" },
        recomendaciones: { $first: "$recomendaciones" },
        recetas: {
          $push: {
            medicamento: "$medicamentoInfo.nombre",
            dosis: "$recetaMedica.dosis",
            notas: "$recetaMedica.notas"
          }
        }
      }
    },
    {
      $project: {
        _id: 0,
        identificacion: "$identificacionPaciente",
        primerNombre: "$primerNombrePaciente",
        apellido: "$apellidoPaciente",
        email: "$emailPaciente",
        numeroDeTelefono: "$telefonoPaciente",
        tipoDeSangre: "$tipoDeSangrePaciente",
        direccion: "$direccionPaciente",
        diagnostico: "$diagnostico",
        recomendaciones: "$recomendaciones",
        recetaMedica: "$recetas"
      }
    }
  ]);
  db.doctores.aggregate([
    {
      $lookup: {
        from: "personas",
        localField: "persona_id",
        foreignField: "identificacion",
        as: "doctorInfo"
      }
    },
    {
      $unwind: "$doctorInfo"
    },
    {
      $lookup: {
        from: "citasMedicas",
        localField: "codigo",
        foreignField: "doctorId",
        as: "citas"
      }
    },
    {
      $unwind: {
        path: "$citas",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $lookup: {
        from: "personas",
        localField: "citas.personId",
        foreignField: "identificacion",
        as: "pacienteInfo"
      }
    },
    {
      $unwind: {
        path: "$pacienteInfo",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $group: {
        _id: "$_id",
        codigoDoctor: { $first: "$codigo" },
        nombreDoctor: { $first: "$doctorInfo.primerNombre" },
        apellidoDoctor: { $first: "$doctorInfo.apellido" },
        especialidadDoctor: { $first: "$especialidad" },
        pacientesAtendidos: {
          $addToSet: {
            identificacion: "$pacienteInfo.identificacion",
            nombres: "$pacienteInfo.primerNombre",
            apellidos: "$pacienteInfo.apellido",
            telefono: "$pacienteInfo.numeroDeTelefono",
            email: "$pacienteInfo.email",
            tipoDeSangre: "$pacienteInfo.tipoDeSangre"
          }
        }
      }
    },
    {
      $project: {
        _id: 0,
        datosMedico: {
          codigo: "$codigoDoctor",
          nombre: "$nombreDoctor",
          apellido: "$apellidoDoctor",
          especialidad: "$especialidadDoctor"
        },
        listaPacientes: "$pacientesAtendidos"
      }
    }
  ]);
  db.citasMedicas.aggregate([
    {
      $group: {
        _id: "$personId",
        numeroVisitas: { $sum: 1 }
      }
    },
    {
      $lookup: {
        from: "personas",
        localField: "_id",
        foreignField: "identificacion",
        as: "pacienteInfo"
      }
    },
    {
      $unwind: "$pacienteInfo"
    },
    {
      $project: {
        _id: 0,
        identificacion: "$pacienteInfo.identificacion",
        nombres: "$pacienteInfo.primerNombre",
        apellidos: "$pacienteInfo.apellido",
        telefono: "$pacienteInfo.numeroDeTelefono",
        email: "$pacienteInfo.email",
        numeroDeVisitas: "$numeroVisitas"
      }
    }
  ]);
  db.citasMedicas.aggregate([
    {
      $match: {
        fechaCita: {
          $gte: ISODate("FECHA_INICIO"),
          $lte: ISODate("FECHA_FIN") 
        }
      }
    },
    {
      $lookup: {
        from: "medicaciones",
        localField: "_id",
        foreignField: "citasMedicasId",
        as: "recetas"
      }
    },
    {
      $unwind: "$recetas"
    },
    {
      $group: {
        _id: "$recetas.medicinasId",
        cantidadRecetada: { $sum: 1 }
      }
    },
    {
      $sort: {
        cantidadRecetada: -1
      }
    },
    {
      $lookup: {
        from: "medicinas",
        localField: "_id",
        foreignField: "codigo",
        as: "medicamentoInfo"
      }
    },
    {
      $unwind: "$medicamentoInfo"
    },
    {
      $project: {
        _id: 0,
        codigoMedicamento: "$medicamentoInfo.codigo",
        nombreMedicamento: "$medicamentoInfo.nombre",
        descripcionMedicamento: "$medicamentoInfo.descripcion",
        vecesRecetado: "$cantidadRecetada"
      }
    }
  ]);