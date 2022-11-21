const d = document;

export default function boxPrecios(btnP,boxP,btnAr,paquete){
    const btn = d.getElementsByClassName(btnP);
    const box = d.getElementsByClassName(boxP);
    const arrow = d.getElementsByClassName(btnAr);
    const boxPaq = d.getElementsByClassName(paquete);
   
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener('click',()=>{
            
            box[i].classList.toggle("box-pagos-inf-none");
            arrow[i].classList.toggle("btn-des-giro");
            boxPaq[i].classList.toggle("alt-auto");
            
            
        })
    }
    
}