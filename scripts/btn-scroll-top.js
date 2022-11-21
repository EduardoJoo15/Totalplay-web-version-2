const w = window;//variable window
const d = document;

export default function scrollTopBtn(btn){//funcion recibe el nombre de la clase del boton
    const $boton = d.querySelector(btn);//se obtine el boton por medio del nombre de su clase

    w.addEventListener("scroll",(e)=>{//evento scroll de window
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;// cortocircuito por si el navegador no es compatible
        if(scrollTop > 103){//si el alejamiento al top es mayor a los 103 ...
            $boton.classList.remove("hidden");//se remueve la clase que oculta el boton
        }
        else{
            $boton.classList.add("hidden");//se agrega la clase que oculta al boton
        }
    });

    $boton.addEventListener("click",(e)=>{//si se da click al boton..
        w.scrollTo({behavior:"smooth", top: 0});//metodo de window que recibe un objeto, transicion y accion 
    })
};