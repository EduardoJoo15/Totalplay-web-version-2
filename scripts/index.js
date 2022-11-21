import hamburgerMenu from "./menu-hamburguesa.js";
import scrollTopBtn from "./btn-scroll-top.js";
import networkStatus from "./deteccion-red.js";
import activeChannels from "./active-channels.js";
import selectActive from "./prueba-pqt.js";
import boxPrecios from "./btn-inf-precios.js";
import carouselPaq from "./scrolling.js";
import carouselProm from "./scrolling-prom.js";
import responsiveProm from "./responsive-prom.js";
import activeChannelsAll from "./all-channels.js";

const d = document;

//Evento de espera al documento, dom
d.addEventListener("DOMContentLoaded",(e)=>{  
    hamburgerMenu(".panel-btn",".panel",".menu a");//Selectores de clase pasados por parametros a la funcion
   
    scrollTopBtn(".btn-top-body");

    activeChannels("btn-channels","box-channels","btn-x");

    selectActive("btn-act-1","btn-a-1","btn-act-2","btn-a-2","btn-act-3","btn-a-3");

    boxPrecios("pagos","box-pagos-inf ","btn-des","paquete");

    carouselPaq();

    carouselProm();

    responsiveProm("box-prom","btn-ant","btn-sig");

    activeChannelsAll("box-f","text-channel","btn-x-all")
});


networkStatus("online","online-off","xDos","xDos-off");




