let btn = document.querySelector("#obtener");
let res = document.querySelector("#res");
btn.addEventListener('click',async()=>{
    let peticion = await fetch("/readfile",
    {method:'GET'}
    )
    let data = await peticion.text()
     res.innerHTML = data
})

// JSON.stringify(dara,null,4)