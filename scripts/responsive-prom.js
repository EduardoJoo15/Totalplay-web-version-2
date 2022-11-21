const d = document;

export default function responsiveScreenProm(box,btn1,btn2){
    let boxProm = d.getElementById(box);
    let btnAnt = d.getElementById(btn1);
    let btnSig = d.getElementById(btn2);

    if(window.innerWidth > 1000){
        boxProm.classList.remove("carousel__list_prom");
        boxProm.classList.add("promociones-box");
        btnSig.classList.add("hidden");
        btnAnt.classList.add("hidden");
    }else if(window.innerWidth < 1000){
        boxProm.classList.add("carousel__list_prom");
        boxProm.classList.remove("promociones-box");
        btnSig.classList.remove("text-none");
        btnAnt.classList.remove("text-none");
    }
}