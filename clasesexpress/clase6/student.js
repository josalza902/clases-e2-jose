import express from "express";
import { body, validationResult } from 'express-validate';
import studentDto from 'student_dto.js'

const studentRouter = express.Router();
const validations = [
    body('name').isLenght({ min: 2 }).withMessage('el nombre es obligatorio y debe tener minimo 2 letras'),
    body('email').isEmail().withMessage('ingrese un correo electronico valido'),
    body('age').exists().isInt().withMessage('la edad debe ser numerica'),
]
studentRouter.post('/', validations, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    db.collection('students').insertOne(new studentDto(req.body))
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>console.log(err))

})
studentRouter.get('/',(req,res)=>{
    db
})