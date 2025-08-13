import { csvtoJSON } from "./utils.js";
import 'dotenv/config'

console.log(csvtoJSON(`${process.env.RAW_DIR}/acme_doctors_apointments.csv`))