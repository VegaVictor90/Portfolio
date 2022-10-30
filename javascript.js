addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector(".boton")
    if(boton) {
        boton.addEventListener("click", () => {
            const menu_itens = document.querySelector(".menu_itens")
            menu_itens.classList.toggle("action")
        })
    }
})

addEventListener("DOMContentLoaded", () => {
    const itens_salir = document.querySelector(".itens_salir")
    const itens_salir1 = document.querySelector(".itens_salir1")
    const itens_salir2 = document.querySelector(".itens_salir2")
    const itens_salir3 = document.querySelector(".itens_salir3")
    const itens_salir4 = document.querySelector(".itens_salir4")
    
    if(itens_salir) {
        itens_salir.addEventListener("click", () => {
            const menu_itens = document.querySelector(".menu_itens")
            menu_itens.classList.toggle("action")
        })
    }    
    if(itens_salir1) {
        itens_salir1.addEventListener("click", () => {
            const menu_itens = document.querySelector(".menu_itens")
            menu_itens.classList.toggle("action")
        })
    }    
    if(itens_salir2) {
        itens_salir2.addEventListener("click", () => {
            const menu_itens = document.querySelector(".menu_itens")
            menu_itens.classList.toggle("action")
        })
    }    
    if(itens_salir3) {
        itens_salir3.addEventListener("click", () => {
            const menu_itens = document.querySelector(".menu_itens")
            menu_itens.classList.toggle("action")
        })
    }    
    if(itens_salir4) {
        itens_salir4.addEventListener("click", () => {
            const menu_itens = document.querySelector(".menu_itens")
            menu_itens.classList.toggle("action")
        })
    }    
})



//volver//

window.onscroll=function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector(".volver_container")
        .classList.add("show");

    }
    else{
        document.querySelector(".volver_container")
        .classList.remove("show");

    }
}


//document.querySelector(".volver_container")
//addEventListener("click" , () =>{
//    window.scrollTo({
//        top: 0,
//        behavior: "smooth"
//    });
//})
