import fs from "fs";

export async function readAndInsertCsv(csvfilepath, db) {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(csvfilepath)) {
            return reject(new Error(`el archivo no existe en la ruta: ${csvfilepath}`));
        }

        const documents = [];
        let heads = [];
        let isfirstline = true;
        const readstream = fs.createReadStream(csvfilepath, { encoding: 'utf8' });
        let remaining = '';
        readstream.on('data', (chunck) => {
            remaining += chunck;
            let lastnewlineindex = remaining.lastIndexOf('\n');

            if (lastnewlineindex !== -1) {
                let completeData = remaining.substring(0, lastnewlineindex);
                remaining = remaining.substring(lastnewlineindex + 1);

                const lines = completeData.split('\n').filter(line => line.trim() !== '');

                for (const line of lines) {
                    if (isfirstline) {
                        heads = line.split(',').map(v => v.trim());
                        isfirstline = false;
                    } else {
                        const values = line.split(',').map(v => v.trim());
                        if (values.length === heads.length) {
                            const doc = {};
                            for (let i = 0; i < heads.length; i++) {
                                let parsedvalue = values[i];
                                if (!isNaN(parsedvalue) && parsedvalue !== '') {
                                    parsedvalue = Number(parsedvalue);
                                }
                                doc[heads[i]] = parsedvalue
                            }
                            documents.push(doc);
                        } else {
                            console.warn(`[ADvertencia]saltando linea malformada: "${line}" en ${csvfilepath}. Número de valores no coincide con los encabezados.`)
                        }

                    }
                }
            }
        });
        readstream.on('end', async () => {
            const finallines = remaining.split('\n').filter(line => line.trim() !== '');
            for (const line of finallines) {
                if (isfirstline) {
                    heads = line.split(',').map(h => h.trim());
                    isfirstline = false;
                } else {
                    const values = line.split(',').map(v => v.trim());
                    if (values.length === heads.length) {
                        const doc = {};
                        for (let i = 0; i < heads.length; i++) {
                            let parsedvalue = values[i];
                            if (!isNaN(parsedvalue) && parsedvalue !== '') {
                                parsedvalue = Number(parsedvalue);
                            }
                            doc[heads[i]] = parsedvalue;
                        }
                        documents.push(doc);
                    } else {
                        console.warn(`[ADVERTENCIA] Saltando línea malformada final: "${line}" en ${csvfilepath}.`)
                    }
                }

            }
            if (documents.length > 0) {
                try {
                    const collection = db.CentroMedicoAcme
                    const result = collection.insertMany([]);
                    console.log(`Se insertaron ${result.insertedCount} documentos en la colección .`);
                    resolve(result);
                } catch (error) {
                    console.error(`Error al insertar documentos en MongoDB para :`, error);
                    reject(error);
                }
            } else {
                console.log(`No se encontraron documentos válidos para insertar en  desde ${csvfilepath}.`);
                resolve({ insertedCount: 0 })
            }
        });
        readstream.on('error', (err) => {
            console.error(`Error al leer el archivo CSV ${csvfilepath}:`, err);
            reject(err)
        });
    })

}