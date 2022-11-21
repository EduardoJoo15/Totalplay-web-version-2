
const d = document;

export default function selectActive(boxBtn1,btnA1,boxBtn2,btnA2,boxBtn3,btnA3){
    let divBtn1 = d.getElementById(boxBtn1);
    let aBtn1 = d.getElementById(btnA1);

    let divBtn2 = d.getElementById(boxBtn2);
    let aBtn2 = d.getElementById(btnA2);

    let divBtn3 = d.getElementById(boxBtn3);
    let aBtn3 = d.getElementById(btnA3);

    const imgAOne = divBtn2.childNodes[1].childNodes[3];
    const imgATwo = divBtn3.childNodes[1].childNodes[4];

    const imagen1 = "./assets/Logos/logo_dark_plus.svg"; 
    const imagen2 = "./assets/Logos/logo_white_plus.svg"; 

    const imgAlexa = "./assets/Img/totalplay_tv_plus.png"; 
    const imgTv = "./assets/Img/totalplay_tv.png"; 
    const imgModem = "./assets/Img/ontwifi5.png"; 

    let img = d.getElementsByClassName("img-tv");

    let imgTotal = d.getElementsByClassName("img-inclu");
    let pIntTv = d.getElementsByClassName("canales-internet");

    let textPag = d.getElementsByClassName("text-inf-pag"); 
    let charO = d.getElementById("char-o");

    let precio = d.getElementsByClassName("precio");
    let paq1 = d.getElementById("paq-1");
    const pagosInt=[639,469,449,739,509,549,859,599,649,1069,799,849,1769,1499,1519];
    const pagosIntTv=[809,639,599,909,669,699,1029,759,799,1269,949,1019,1969,1599,1699];
    const pagosIntTvA=[909,739,699,1009,769,799,1129,859,899,1369,1049,1119,2069,1699,1799];

    const precioInt=[469,569,689,899,1599];
    const precioIntTv=[639,739,859,1099,1799];
    const precioIntTvA=[739,839,959,1199,1899];
   
    divBtn1.addEventListener('click',()=>{
        if(divBtn1.classList == "btn-active-pqt" && aBtn1.classList == "btn-active-pqt-a"){
            divBtn1.classList.add("btn-desactive-pqt");
            aBtn1.classList.add("btn-desactive-pqt-a");
            charO.classList.add("text-none");
            paq1.classList.remove("paq-1-h");
            
            divBtn2.classList.remove("btn-desactive-pqt");
            aBtn2.classList.remove("btn-desactive-pqt-a");
            imgAOne.src = imagen2; imgAOne.classList.remove("btn-desactive-pqt-img");

            divBtn3.classList.remove("btn-desactive-pqt");
            aBtn3.classList.remove("btn-desactive-pqt-a");
            imgATwo.src = imagen2;  imgATwo.classList.remove("btn-desactive-pqt-img");

            //Iteracion de los pagos de las 5 cajas de internet
            for(let j=0;j<textPag.length;j++){
                textPag[j].childNodes[1].textContent = `$${pagosInt[j]}`;
            }
        }

        for(let i=0;i<img.length;i++){
            img[i].src = imgModem;
            imgTotal[i].classList.add("img-none");
            pIntTv[i].textContent = "Servicio de Internet";
            precio[i].childNodes[3].childNodes[0].textContent = `$${precioInt[i]}`;
        }
    })

    divBtn2.addEventListener('click',()=>{
        if(divBtn2.classList == "btn-active-pqt" && aBtn2.classList == "btn-active-pqt-a"){
            divBtn2.classList.add("btn-desactive-pqt");
            aBtn2.classList.add("btn-desactive-pqt-a");
            imgAOne.classList.add("btn-desactive-pqt-img");
            charO.classList.remove("text-none");
            for(let i=0;i<img.length;i++){
                img[i].src = imgTv;
                imgTotal[i].classList.remove("img-none");
                pIntTv[i].textContent = "150 canales (100 en HD)";
                precio[i].childNodes[3].childNodes[0].textContent = `$${precioIntTv[i]}`;
            }
            
            for(let j=0;j<textPag.length;j++){
                textPag[j].childNodes[1].textContent = `$${pagosIntTv[j]}`;
            }

                imgAOne.src = imagen1;            

            divBtn1.classList.remove("btn-desactive-pqt");
            aBtn1.classList.remove("btn-desactive-pqt-a");

            divBtn3.classList.remove("btn-desactive-pqt");
            aBtn3.classList.remove("btn-desactive-pqt-a");
            imgATwo.src = imagen2;  imgATwo.classList.remove("btn-desactive-pqt-img");

        }
       
    })

    divBtn3.addEventListener('click',()=>{
        if(divBtn3.classList == "btn-active-pqt" && aBtn3.classList == "btn-active-pqt-a"){
            divBtn3.classList.add("btn-desactive-pqt");
            aBtn3.classList.add("btn-desactive-pqt-a");
            imgATwo.classList.add("btn-desactive-pqt-img");
            charO.classList.remove("text-none");

            for(let i=0;i<img.length;i++){
                img[i].src = imgAlexa;
                imgTotal[i].classList.remove("img-none");
                pIntTv[i].textContent = "150 canales (100 en HD)";
                precio[i].childNodes[3].childNodes[0].textContent = `$${precioIntTvA[i]}`;
            }

            for(let j=0;j<textPag.length;j++){
                textPag[j].childNodes[1].textContent = `$${pagosIntTvA[j]}`;
            }

                imgATwo.src = imagen1;

            divBtn1.classList.remove("btn-desactive-pqt");
            aBtn1.classList.remove("btn-desactive-pqt-a");

            divBtn2.classList.remove("btn-desactive-pqt");
            aBtn2.classList.remove("btn-desactive-pqt-a");
            imgAOne.src = imagen2;  imgAOne.classList.remove("btn-desactive-pqt-img");
        }
       
    })

}