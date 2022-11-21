const d = document,
w = window,
n = navigator;

export default function networkStatus(boxOnline,boxOffline,cerr,cerrOff){

    const $boxOnline = d.getElementById(boxOnline),
    $boxOffline = d.getElementById(boxOffline),
    $cerr = d.getElementById(cerr),
    $cerrOff = d.getElementById(cerrOff);

    const isOnLine = ()=>{
        if(n.onLine){
            $boxOnline.classList.add("online-active");
            $boxOffline.classList.remove("online-active");
            setTimeout(()=>{$boxOnline.classList.remove("online-active")},4000);

        }else{
            $boxOffline.classList.add("online-active");
            //$boxOnline.classList.remove("online-active");
        }
    }

    d.addEventListener("click",(e)=>{
        if(e.target === $cerr){
            $boxOnline.classList.remove("online-active");
        }
        if(e.target === $cerrOff){
            $boxOffline.classList.remove("online-active");
        }
    }) 

    w.addEventListener("online",(e)=> isOnLine());
    w.addEventListener("offline",(e)=> isOnLine());

}