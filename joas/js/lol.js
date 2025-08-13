const option = document.querySelectorAll(".option")

option.forEach(elemento => {
    elemento.addEventListener("click",({target})=>{
        const workspace = document.getElementById("workspace")
        switch(target.getAttribute("id")){
            case "frm":
                workspace.innerHTML = `<form>
                <input type="text" /> <input type="button" value=enviar />
                </form> `

            break;
            case "msj":
                workspace.innerHTML = `<strong> este es un mensaje </strong>`
            break;
        }

    })
});