// import fs from "fs";

// export async function readAndInsertCsv(csvfilepath, db) {
//     return new Promise((resolve, reject) => {
//         if (!fs.existsSync(csvfilepath)) {
//             return reject(new Error(`el archivo no existe en la ruta: ${csvfilepath}`));
//         }

//         const documents = [];
//         let heads = [];
//         let isfirstline = true;
//         const readstream = fs.createReadStream(csvfilepath, { encoding: 'utf8' });
//         let remaining = '';
//         readstream.on('data', (chunck) => {
//             remaining += chunck;
//             let lastnewlineindex = remaining.lastIndexOf('\n');

//             if (lastnewlineindex !== -1) {
//                 let completeData = remaining.substring(0, lastnewlineindex);
//                 remaining = remaining.substring(lastnewlineindex + 1);

//                 const lines = completeData.split('\n').filter(line => line.trim() !== '');

//                 for (const line of lines) {
//                     if (isfirstline) {
//                         heads = line.split(',').map(v => v.trim());
//                         isfirstline = false;
//                     } else {
//                         const values = line.split(',').map(v => v.trim());
//                         if (values.length === heads.length) {
//                             const doc = {};
//                             for (let i = 0; i < heads.length; i++) {
//                                 let parsedvalue = values[i];
//                                 if (!isNaN(parsedvalue) && parsedvalue !== '') {
//                                     parsedvalue = Number(parsedvalue);
//                                 }
//                                 doc[heads[i]] = parsedvalue
//                             }
//                             documents.push(doc);
//                         } else {
//                             console.warn(`[ADvertencia]saltando linea malformada: "${line}" en ${csvfilepath}. Número de valores no coincide con los encabezados.`)
//                         }

//                     }
//                 }
//             }
//         });
//         readstream.on('end', async () => {
//             const finallines = remaining.split('\n').filter(line => line.trim() !== '');
//             for (const line of finallines) {
//                 if (isfirstline) {
//                     heads = line.split(',').map(h => h.trim());
//                     isfirstline = false;
//                 } else {
//                     const values = line.split(',').map(v => v.trim());
//                     if (values.length === heads.length) {
//                         const doc = {};
//                         for (let i = 0; i < heads.length; i++) {
//                             let parsedvalue = values[i];
//                             if (!isNaN(parsedvalue) && parsedvalue !== '') {
//                                 parsedvalue = Number(parsedvalue);
//                             }
//                             doc[heads[i]] = parsedvalue;
//                         }
//                         documents.push(doc);
//                     } else {
//                         console.warn(`[ADVERTENCIA] Saltando línea malformada final: "${line}" en ${csvfilepath}.`)
//                     }
//                 }

//             }
//             if (documents.length > 0) {
//                 try {
//                     const collection = db.CentroMedicoAcme
//                     const result = collection.insertMany([]);
//                     console.log(`Se insertaron ${result.insertedCount} documentos en la colección .`);
//                     resolve(result);
//                 } catch (error) {
//                     console.error(`Error al insertar documentos en MongoDB para :`, error);
//                     reject(error);
//                 }
//             } else {
//                 console.log(`No se encontraron documentos válidos para insertar en  desde ${csvfilepath}.`);
//                 resolve({ insertedCount: 0 })
//             }
//         });
//         readstream.on('error', (err) => {
//             console.error(`Error al leer el archivo CSV ${csvfilepath}:`, err);
//             reject(err)
//         });
//     })

// }
import fs from 'fs';
import path from "path";
import { parseDate } from './utils.js';

class DataManager {
    constructor(db) {
        this.db = db;
    }

    async importData() {
        const csvFilePath = path.join(process.cwd(), 'raw_data', 'doctors_apointments.csv');

        if (!fs.existsSync(csvFilePath)) {
            console.error(`Error: el archivo no existe en la ruta: ${csvFilePath}`);
            return;
        }

        console.log(`\nImportando datos desde ${csvFilePath}...`);

        const doctorsCount = new Set();
        const patientsCount = new Set();
        const officesCount = new Set();
        const medicinesCount = new Set();
        let appointmentsCount = 0;
        let medicationsCount = 0;

        try {
            const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf8' });
            const lines = fileContent.split('\n').filter(line => line.trim() !== '');

            if (lines.length <= 1) {
                console.log('El archivo CSV está vacío o solo contiene encabezados.');
                return;
            }

            const heads = lines[0].split(';').map(h => h.trim());

            for (let i = 1; i < lines.length; i++) {
                const line = lines[i];
                const values = line.split(';').map(v => v.trim());
                if (values.length !== heads.length) {
                    console.warn(`[ADVERTENCIA] Saltando línea malformada en ${csvFilePath}: "${line}"`);
                    continue;
                }

                const doc = {};
                for (let j = 0; j < heads.length; j++) {
                    doc[heads[j]] = values[j];
                }

                // --- 1. PROCESAR DATOS DE LA PERSONA (PACIENTE) ---
                const patientIdentification = doc['patient_identifications'];
                let patientId = null;
                const personaPaciente = {
                    identificacion: patientIdentification,
                    primerNombre: doc['patient_first_name'],
                    apellido: doc['patient_last_name'],
                    email: doc['patient_email'],
                    numeroDeTelefono: doc['patient_phone_number'],
                    tipoDeSangre: doc['patient_blood_type'],
                    direccion: doc['patient_address'],
                };
                const resultPaciente = await this.db.collection('personas').findOneAndUpdate(
                    { identificacion: personaPaciente.identificacion },
                    { $set: personaPaciente },
                    { upsert: true, returnOriginal: false }
                );
                patientId = resultPaciente.value._id;
                patientsCount.add(patientIdentification);

                // --- 2. PROCESAR DATOS DEL DOCTOR ---
                const doctorIdentification = doc['doctor_identification'];
                let doctorObjectId = null;
                const personaDoctor = {
                    identificacion: doctorIdentification,
                    primerNombre: doc['doctor_first_name'],
                    apellido: doc['doctor_last_name'],
                    email: doc['doctor_email'],
                    numeroDeTelefono: doc['doctor_phone_number'],
                    tipoDeSangre: doc['doctor_blood_type'],
                    direccion: doc['doctor_address'],
                };
                const resultPersonaDoctor = await this.db.collection('personas').findOneAndUpdate(
                    { identificacion: personaDoctor.identificacion },
                    { $set: personaDoctor },
                    { upsert: true, returnOriginal: false }
                );
                const doctorPersonId = resultPersonaDoctor.value._id;

                const doctorDoc = {
                    persona_id: doctorPersonId,
                    codigo: doc['doctor_code'],
                    especialidad: doc['doctor_specialism'],
                    fechaDeInicio: parseDate(doc['doctor_start_date']),
                    activo: doc['doctor_active'] === 'true',
                };
                const resultDoctor = await this.db.collection('doctores').findOneAndUpdate(
                    { codigo: doctorDoc.codigo },
                    { $set: doctorDoc },
                    { upsert: true, returnOriginal: false }
                );
                doctorObjectId = resultDoctor.value._id;
                doctorsCount.add(doctorIdentification);

                // --- 3. PROCESAR DATOS DE LA OFICINA ---
                const officeCode = doc['office_code'];
                let officeObjectId = null;
                const officeDoc = {
                    codigo: officeCode,
                    piso: parseInt(doc['office_floor'], 10),
                    activo: doc['office_active'] === 'true',
                };
                const resultOffice = await this.db.collection('oficinas').findOneAndUpdate(
                    { codigo: officeDoc.codigo },
                    { $set: officeDoc },
                    { upsert: true, returnOriginal: false }
                );
                officeObjectId = resultOffice.value._id;
                officesCount.add(officeCode);
                
                // --- 4. PROCESAR DATOS DE LA MEDICINA ---
                const medicineCode = doc['medicine_code'];
                let medicineObjectId = null;
                const medicineDoc = {
                    codigo: medicineCode,
                    nombre: doc['medicine_name'],
                    descripcion: doc['medicine_description'],
                    activo: doc['medicine_active'] === 'true',
                };
                const resultMedicine = await this.db.collection('medicinas').findOneAndUpdate(
                    { codigo: medicineDoc.codigo },
                    { $set: medicineDoc },
                    { upsert: true, returnOriginal: false }
                );
                medicineObjectId = resultMedicine.value._id;
                medicinesCount.add(medicineCode);

                // --- 5. PROCESAR CITA MÉDICA ---
                const appointmentDoc = {
                    fechaCita: parseDate(doc['apointment_date']),
                    doctorId: doctorObjectId,
                    personId: patientId,
                    officeId: officeObjectId,
                    diagnosticoClinico: doc['clinical_diagnosis'],
                    recomendaciones: doc['recommendations'],
                };
                const appointmentResult = await this.db.collection('citasMedicas').insertOne(appointmentDoc);
                const appointmentObjectId = appointmentResult.insertedId;
                appointmentsCount++;

                // --- 6. PROCESAR MEDICACIÓN (Asociada a la cita) ---
                const medicationDoc = {
                    citasMedicasId: appointmentObjectId,
                    medicinasId: medicineObjectId,
                    dosis: parseInt(doc['dosage'], 10),
                    notas: doc['note']
                };
                await this.db.collection('medicaciones').insertOne(medicationDoc);
                medicationsCount++;
            }

            console.log('\n--- Resumen de la importación ---');
            console.log(`- Pacientes procesados: ${patientsCount.size}`);
            console.log(`- Doctores procesados: ${doctorsCount.size}`);
            console.log(`- Oficinas procesadas: ${officesCount.size}`);
            console.log(`- Medicinas procesadas: ${medicinesCount.size}`);
            console.log(`- Citas médicas insertadas: ${appointmentsCount}`);
            console.log(`- Medicaciones insertadas: ${medicationsCount}`);
            console.log('Importación completada con éxito.');

        } catch (error) {
            console.error('Error durante la importación de datos:', error);
        }
    }
}

export default DataManager;
