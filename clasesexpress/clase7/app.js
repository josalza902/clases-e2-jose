import express from 'express'
import cookieParser from 'cookie-parser'
// import cookieParser from 'cookie-session'

const app = express();
// app.use(cookieParser('123456'));
app.use(cookieParser());

app.get('/crearCookie',(req,res)=>{
    res.cookie('nombreCookie','valorCookie');
    res.send('cookie creada')
});

app.get('/leerCookie',(req,res)=>{
    const miCookie = req.cookies.nombreCookie;
    res.send('valor de la cookie \n'+ miCookie)
})
app.get('/borrarCookie',(req,res)=>{
    res.clearCookie('nombreCookie');
    res.send('cookie eliminada')
})
// app.get('/firmar',(req,res)=>{
//     res.cookie('micookiesegura','valor',{secure:true});
//     res.cookie('micookiefirmada','valor',{signed:true});
//     res.send('cookie firmada')
// })
app.get('/cookieFirmada',(req,res)=>{
    const valorCookieFirmada = req.signedCookies.miCookieFirmada;
    if(valorCookieFirmada){
        res.send('cookie firmada valida:'+valorCookieFirmada)
    }else{
        res.send('cookie firmada o no valida')
    }
})
app.get('/setCookie',(req,res)=>{
    res.cookie('miCookies','valor de la cookie',{maxAge:30*1000},
    res.send('cookie establecida'))
})
// app.get('/cookieSesion',(req,res)=>{
//     req.session.cookieSesion='valor de la cookie session';
//     res.send('cookie de sesion creada')
//     // name:'session',
//     // keys:["adasdas"]
// })
const verificarAutentificacion =(req,res,next)=>{
    const authcookie = req.cookies.auth;
    if(!authcookie){
        return res.status(401).send('no autorizado')
    }
    next();
}

app.get('/auth',(req,res)=>{
    res.cookie('auth','123');
    res.send('autenticado')
})
app.get('/rutaProtegida',verificarAutentificacion,(req,res)=>{
    res.send('Bienvenido a la ruta protegida')
})
app.listen(3000,()=>{
    console.log('servidor corriendo en el puerto 3000')
})