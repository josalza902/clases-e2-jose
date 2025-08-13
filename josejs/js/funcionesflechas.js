const operaciones = {
    num1 : 0,
    num2 : 0,

    suma : function(){
        console.log(this.num1+this.num2);
    },
    sumaExterna: (num1,num2)=>{
        console.log(num1+num2);
    }
}
operaciones.num1 = 5;
operaciones.num2 = 15;
operaciones.suma()
operaciones.sumaExterna(5,14)
