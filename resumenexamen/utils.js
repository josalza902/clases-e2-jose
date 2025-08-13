import { readFileSync } from 'fs';


export function csvtoJSON(path) {
    const data = readFileSync(path, 'utf-8')
    let result =[];
    const headers = {
        
        patient_identifications:'identifications',
        patient_first_name:'firstname',
        patient_last_name:'lastname',
        patient_email:'email',
        patient_phone_number:'phonenumber',
        patient_blood_type:'bloodtype',
        patient_address:'address',
        doctor_code:'code',
        doctor_specialism:'specialism',
        doctor_start_date:'startdate',
        doctor_identification:'identification',
        doctor_first_name:'firstname',
        doctor_last_name:'lastname',
        doctor_email:'email',
        doctor_phone_number:'phonenumber',
        doctor_blood_type:'bloodtype',
        doctor_address:'address',
        doctor_active:'active',
        office_code:'code',
        office_name:'name',
        office_floor:'floor',
        office_active:'active',
        medicine_code:'code',
        medicine_name:'name',
        medicine_description:'description',
        medicine_active:'active',



    }
    const regs = data.split('\n').map(elem => elem.replace('\r', ''));
    const dataHeader = regs[0].split(';');
    regs.forEach((elem, i )=>{
        let obj = {}
        if(i>0){
            const reg = elem.split(';');
            reg.forEach((value,j)=>{
                switch(dataHeader[j].split('_')[0]){
                    case'patient':
                        obj.patient={...obj.patient,[headers[dataHeader[j]]] : value};
                    break;
                    case'doctor':
                        obj.doctor={...obj.doctor,[headers[dataHeader[j]]] : value};
                    break;
                    case'office':
                        obj.office={...obj.office,[headers[dataHeader[j]]] : value};
                    break;
                    case'medicine':
                        obj.medicine={...obj.medicine,[headers[dataHeader[j]]] : value};
                    break;
                    default:
                        switch(dataHeader[j]){
                            // case'id':
                            // console.log('jaja')
                            // obj.id = value
                            // console.log('jaja2')
                            // break;
                            case'apointment_date':
                            console.log('jaja')
                            obj.id = value
                            console.log('jaja2')
                            break;
                            case'clinical_diagnosis':
                            obj.clinicalDiagnosis = value
                            break;
                            case'recommendations':
                            obj.recommendations = value
                            break;
                            case'dosage':
                            obj.dosage = value
                            break;
                            case'note':
                            obj.note = value
                            break;
                        }
                    break;
                }
            });
            result.push(obj)
            
        }

    });


    return result;
}

