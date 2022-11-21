const d = document;

export default function activeChannelsAll(box,text,btn){
    let boxC = d.getElementById(box);
    let btnText = d.getElementById(text);
    let btnX = d.getElementById(btn);
    
    btnText.addEventListener('click',()=>{
        boxC.classList.toggle("channels-active");
        
    });
    btnX.addEventListener('click',()=>{
        boxC.classList.remove("channels-active");
    });
}